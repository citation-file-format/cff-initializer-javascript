import { StepNameType, useApp } from 'src/store/app'
import { describe, expect, it, jest } from '@jest/globals'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'

const routerPushMock = jest.fn()

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: routerPushMock
    })
}))

describe('useApp', () => {
    const {
        cannotGoBack,
        cannotGoForward,
        lastStepIndex,
        navigateDirect,
        navigateNext,
        navigatePrevious,
        setShowAdvanced,
        setStepName,
        showAdvanced,
        stepName
    } = useApp()
    const { reset: resetCffData } = useCff()
    const { reset: resetStepperErrorState } = useStepperErrors()
    const basicStepNames = ['start', 'authors'] as Array<StepNameType>
    const advancedStepNames = [
        'identifiers',
        'related-resources',
        'abstract',
        'keywords',
        'license',
        'version-specific'
    ] as Array<StepNameType>

    beforeEach(() => {
        resetCffData()
        resetStepperErrorState()
        setShowAdvanced(false)
        void setStepName('start')
    })

    it('should start with state on step 0 and not advanced', () => {
        expect(showAdvanced.value).toBe(false)
        expect(stepName.value).toBe('start')
    })

    describe('during basic mode', () => {
        it(`should have ${basicStepNames.length} as lastIndex`, () => {
            expect(lastStepIndex.value).toBe(basicStepNames.length)
        })
        it('should be navigable with next and previous (except at boundaries)', () => {
            expect(cannotGoBack.value).toBe(true)
            basicStepNames.forEach((step) => {
                expect(stepName.value).toBe(step)
                expect(cannotGoForward.value).toBe(false)
                void navigateNext()
                expect(cannotGoBack.value).toBe(false)
            })
            expect(stepName.value).toBe('finish-minimum')
            expect(cannotGoForward.value).toBe(true)
            Array.from(basicStepNames).reverse().forEach((step) => {
                expect(cannotGoBack.value).toBe(false)
                void navigatePrevious()
                expect(stepName.value).toBe(step)
                expect(cannotGoForward.value).toBe(false)
            })
            expect(stepName.value).toBe('start')
            expect(cannotGoBack.value).toBe(true)
        })
    })

    describe('during advanced mode', () => {
        beforeEach(() => {
            setShowAdvanced(true)
        })
        const allSteps = [...basicStepNames, ...advancedStepNames]
        it(`should have ${allSteps.length} as lastIndex`, () => {
            expect(lastStepIndex.value).toBe(allSteps.length + 1) // Off-by-one numbering of steps
        })
        it('should be navigable with next and previous (except at boundaries)', () => {
            expect(cannotGoBack.value).toBe(true)
            allSteps.forEach((step) => {
                expect(stepName.value).toBe(step)
                expect(cannotGoForward.value).toBe(false)
                void navigateNext()
                expect(cannotGoBack.value).toBe(false)
            })
            expect(stepName.value).toBe('finish-advanced')
            expect(cannotGoForward.value).toBe(true)
            Array.from(allSteps).reverse().forEach((step) => {
                expect(cannotGoBack.value).toBe(false)
                void navigatePrevious()
                expect(stepName.value).toBe(step)
                expect(cannotGoForward.value).toBe(false)
            })
            expect(stepName.value).toBe('start')
            expect(cannotGoBack.value).toBe(true)
        })
    })

    describe('when directly entering a path', () => {
        beforeEach(() => {
            setShowAdvanced(false)
        })
        it('should enable advanced mode for advanced steps and finish-advanced and respect next/previous', () => {
            advancedStepNames.forEach((step) => {
                navigateDirect(step)
                expect(showAdvanced.value).toBe(true)
                expect(cannotGoForward.value).toBe(false)
                expect(cannotGoBack.value).toBe(false)
            })
            navigateDirect('finish-advanced')
            expect(showAdvanced.value).toBe(true)
            expect(cannotGoForward.value).toBe(true)
            expect(cannotGoBack.value).toBe(false)
        })
        it('should not enable advanced mode for basic steps and finish-minimum and respect next/previous', () => {
            basicStepNames.forEach((step) => {
                navigateDirect(step)
                expect(showAdvanced.value).toBe(false)
                expect(cannotGoForward.value).toBe(false)
                expect(cannotGoBack.value).toBe(step === 'start')
            })
            navigateDirect('finish-minimum')
            expect(showAdvanced.value).toBe(false)
            expect(cannotGoForward.value).toBe(true)
            expect(cannotGoBack.value).toBe(false)
        })
    })
})
