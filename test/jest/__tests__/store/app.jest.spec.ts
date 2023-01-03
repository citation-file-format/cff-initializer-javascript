import { StepNameType, useApp } from 'src/store/app'
import { describe, expect, it, jest } from '@jest/globals'
import { useCff } from 'src/store/cff'

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
        navigateNext,
        navigatePrevious,
        setStepName,
        stepName
    } = useApp()
    const { reset: resetCffData } = useCff()
    const stepNames = [
        'start',
        'authors',
        'identifiers',
        'related-resources',
        'abstract',
        'keywords',
        'license',
        'version-specific'
    ] as Array<StepNameType>

    beforeEach(() => {
        resetCffData()
        void setStepName('start')
    })

    it('should start with state on step 0', () => {
        expect(stepName.value).toBe('start')
    })

    describe('navigation', () => {
        it(`should have ${stepNames.length} as lastIndex`, () => {
            expect(lastStepIndex.value).toBe(stepNames.length)
        })
        it('should be navigable with next and previous (except at boundaries)', () => {
            expect(cannotGoBack.value).toBe(true)
            stepNames.forEach((step) => {
                expect(stepName.value).toBe(step)
                expect(cannotGoForward.value).toBe(false)
                void navigateNext()
                expect(cannotGoBack.value).toBe(false)
            })
            expect(stepName.value).toBe('finish')
            expect(cannotGoForward.value).toBe(true)
            Array.from(stepNames).reverse().forEach((step) => {
                expect(cannotGoBack.value).toBe(false)
                void navigatePrevious()
                expect(stepName.value).toBe(step)
                expect(cannotGoForward.value).toBe(false)
            })
            expect(stepName.value).toBe('start')
            expect(cannotGoBack.value).toBe(true)
        })
    })
})
