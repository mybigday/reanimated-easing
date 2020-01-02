import Animated from 'react-native-reanimated'
import namelist from './namelist.json'
import Easing from './easing'

const { eq, cond, timing, proc } = Animated

const createEasingCondChain = (val, set, index = 0) => {
  if (!namelist[index]) return
  return cond(
    eq(val, index),
    set(namelist[index]),
    createEasingCondChain(val, set, index + 1),
  )
}

const timingProc = proc(
  (clock, finished, position, time, frameTime, duration, toValue, easing) => {
    const state = {
      finished,
      position,
      time,
      frameTime,
    }
    return createEasingCondChain(easing, key =>
      timing(clock, state, {
        duration,
        toValue,
        easing: Easing[key],
      }),
    )
  },
)

export const getEasingValue = easingKey => namelist.findIndex(easingKey)

// NOTE: Optimize using proc, to avoid long-term preparations
export const timingWithVariableEasing = (clock, state, config) => {
  return timingProc(
    clock,
    state.finished,
    state.position,
    state.time,
    state.frameTime,
    config.duration,
    config.toValue,
    config.easing,
  )
}
