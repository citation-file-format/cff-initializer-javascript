<template>
    <nav>
        <q-stepper
            animated
            class="transparent"
            error-color="negative"
            error-icon="warning"
            flat
            header-nav
            inactive-color="primary"
            inactive-icon=""
            v-bind:model-value="stepName"
            vertical
        >
            <q-step
                v-for="(step, stepIndex) in stepNames"
                v-bind:active-icon="activeIcon(errorPerStep[step].value, step)"
                v-bind:aria-label="toLabel(step)"
                v-bind:data-cy="`step-${step}`"
                v-bind:done="currentStepIndex > stepIndex"
                v-bind:error="errorPerStep[step].value"
                v-bind:key="step"
                v-bind:name="step"
                v-bind:order="stepIndex"
                v-bind:title="toLabel(step)"
                v-on:click="setStepName(step)"
                v-on:keyup.enter="setStepName(step)"
            />
        </q-stepper>
    </nav>
</template>

<script lang="ts">

import { ComputedRef, computed } from 'vue'
import { StepNameType, useApp } from 'src/store/app'
import {
    byError,
    instancePathStartsWithMatcher,
    screenAuthorQueries,
    screenIdentifiersQueries,
    screenKeywordsQueries,
    screenRelatedResourcesQueries,
    screenStartQueries,
    screenVersionSpecificQueries
} from 'src/error-filtering'
import { useValidation } from 'src/store/validation'

export default {
    setup () {
        const { currentStepIndex, stepName, setStepName, stepNames } = useApp()
        const { errors } = useValidation()
        const toLabel = (name: string) => {
            return name.split('-').map((s) => s.slice(0, 1).toUpperCase() + s.slice(1)).join(' ')
        }
        const errorStateScreenAuthors = computed(() => {
            return screenAuthorQueries
                .filter(byError(errors.value, instancePathStartsWithMatcher))
                .length > 0
        })
        const errorStateScreenIdentifiers = computed(() => {
            return screenIdentifiersQueries
                .filter(byError(errors.value, instancePathStartsWithMatcher))
                .length > 0
        })
        const errorStateScreenKeywords = computed(() => {
            return screenKeywordsQueries
                .filter(byError(errors.value, instancePathStartsWithMatcher))
                .length > 0
        })
        const errorStateScreenRelatedResources = computed(() => {
            return screenRelatedResourcesQueries
                .filter(byError(errors.value, instancePathStartsWithMatcher))
                .length > 0
        })
        const errorStateScreenStart = computed(() => {
            return screenStartQueries
                .filter(byError(errors.value)) // One of the possible errors is instancePath == '', so we use a traditional approach here
                .length > 0
        })
        const errorStateScreenVersionSpecific = computed(() => {
            return screenVersionSpecificQueries
                .filter(byError(errors.value, instancePathStartsWithMatcher))
                .length > 0
        })
        const errorPerStep: Record<StepNameType, ComputedRef<boolean>> = {
            start: errorStateScreenStart,
            authors: errorStateScreenAuthors,
            identifiers: errorStateScreenIdentifiers,
            'related-resources': errorStateScreenRelatedResources,
            abstract: computed(() => false),
            keywords: errorStateScreenKeywords,
            license: computed(() => false),
            'version-specific': errorStateScreenVersionSpecific,
            finish: computed(() => false)
        }
        return {
            activeIcon: (hasError: boolean, step: StepNameType) => {
                if (hasError) {
                    return 'warning'
                } else if (step === 'finish' && errors.value.length === 0) {
                    return 'done'
                } else {
                    return 'edit'
                }
            },
            currentStepIndex,
            errorPerStep,
            setStepName,
            stepName,
            stepNames,
            toLabel
        }
    }
}
</script>
