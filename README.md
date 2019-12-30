# reanimated-easing

Use easing functions followed by [`easings.net`](https://easings.net) in [`React Native Reanimated`](https://github.com/software-mansion/react-native-reanimated).

# Installation

```bash
$ yarn add reanimated-easing
```

# Usage

```js
import Animated from 'react-native-reanimtaed'
import Easing from 'reanimated-easing'

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  block,
} = Animated

function createTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  }
  const finished = new Value(0)
  const config = {
    duration: 1000,
    toValue: new Value(0),
    // Use easing function from `reanimated-easing`
    easing: Easing.easeOutElastic,
  }
  return block([
    cond(
      clockRunning(clock),
      [set(config.toValue, dest)],
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    timing(clock, state, config),
    state.position,
  ])
}
```

## Credits

- [easings.net](https://easings.net)
- [`react-native-easing`](https://github.com/thisXY/react-native-easing)
