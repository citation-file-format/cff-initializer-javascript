/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { beforeEach, describe, expect, it } from '@jest/globals'
import { useApp } from '../../../../src/store/app'

describe('useAppState', () => {
    const { step, setStep, decrementStep, incrementStep } = useApp()

    beforeEach(() => {
        setStep(1)
    })

    it('should have initial value of 1', () => {
        expect(step.value).toEqual(1)
    })

    describe('after incrementStep() call', () => {
        beforeEach(() => {
            incrementStep()
        })

        it('should have value of 2', () => {
            expect(step.value).toEqual(2)
        })

        describe('after incrementStep() call', () => {
            beforeEach(() => {
                incrementStep()
            })

            it('should have value of 3', () => {
                expect(step.value).toEqual(3)
            })
        })

        describe('after decrementStep() call', () => {
            beforeEach(() => {
                decrementStep()
            })

            it('should have value of 1', () => {
                expect(step.value).toEqual(1)
            })
        })
    })
})
