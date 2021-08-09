import { beforeEach, describe, expect, it } from '@jest/globals'
import * as vue from 'vue'
import { useStep } from '../../../../src/store/step'

describe('useStep', () => {
    let step: {
    step: vue.ComputedRef<number>;
    next: () => void;
    previous: () => void;
    goto: (newStep: number) => void;
 }

    beforeEach(() => {
        step = useStep()
        step.goto(1) // poor mans reset
    })

    it('should have initial value of 1', () => {
        expect(step.step.value).toEqual(1)
    })

    describe('after next() call', () => {
        beforeEach(() => {
            step.next()
        })

        it('should have value of 2', () => {
            expect(step.step.value).toEqual(2)
        })

        describe('after next() call', () => {
            beforeEach(() => {
                step.next()
            })

            it('should have value of 3', () => {
                expect(step.step.value).toEqual(3)
            })
        })

        describe('after previous() call', () => {
            beforeEach(() => {
                step.previous()
            })

            it('should have value of 1', () => {
                expect(step.step.value).toEqual(1)
            })
        })
    })
})
