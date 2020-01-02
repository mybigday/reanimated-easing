import { Easing } from 'react-native-reanimated'

export default {
  ...Easing,

  easeInSine: Easing.bezier(0.47, 0.0, 0.745, 0.715),
  easeOutSine: Easing.bezier(0.39, 0.575, 0.565, 1.0),
  easeInOutSine: Easing.bezier(0.445, 0.05, 0.55, 0.95),

  easeInQuad: Easing.bezier(0.55, 0.085, 0.68, 0.53),
  easeOutQuad: Easing.bezier(0.25, 0.46, 0.45, 0.94),
  easeInOutQuad: Easing.bezier(0.455, 0.03, 0.515, 0.955),

  easeInCubic: Easing.bezier(0.55, 0.055, 0.675, 0.19),
  easeOutCubic: Easing.bezier(0.215, 0.61, 0.355, 1.0),
  easeInOutCubic: Easing.bezier(0.645, 0.045, 0.355, 1.0),

  easeInQuart: Easing.bezier(0.895, 0.03, 0.685, 0.22),
  easeOutQuart: Easing.bezier(0.165, 0.84, 0.44, 1.0),
  easeInOutQuart: Easing.bezier(0.77, 0.0, 0.175, 1.0),

  easeInQuint: Easing.bezier(0.755, 0.05, 0.855, 0.06),
  easeOutQuint: Easing.bezier(0.23, 1.0, 0.32, 1.0),
  easeInOutQuint: Easing.bezier(0.86, 0.0, 0.07, 1.0),

  easeInExpo: Easing.bezier(0.95, 0.05, 0.795, 0.035),
  easeOutExpo: Easing.bezier(0.19, 1.0, 0.22, 1.0),
  easeInOutExpo: Easing.bezier(1.0, 0.0, 0.0, 1.0),

  easeInCirc: Easing.bezier(0.6, 0.04, 0.98, 0.335),
  easeOutCirc: Easing.bezier(0.075, 0.82, 0.165, 1.0),
  easeInOutCirc: Easing.bezier(0.785, 0.135, 0.15, 0.86),

  easeInBack: Easing.bezier(0.6, -0.28, 0.735, 0.045),
  easeOutBack: Easing.bezier(0.175, 0.885, 0.32, 1.275),
  easeInOutBack: Easing.bezier(0.68, -0.55, 0.265, 1.55),

  easeInElastic: Easing.out(Easing.elastic(2)),
  easeOutElastic: Easing.in(Easing.elastic(2)),
  easeInOutElastic: Easing.inOut(Easing.out(Easing.elastic(2))),

  createEaseInElastic: (bounciness = 2) =>
    Easing.out(Easing.elastic(bounciness)),
  createEaseOutElastic: (bounciness = 2) =>
    Easing.in(Easing.elastic(bounciness)),
  createEaseInOutElastic: (bounciness = 2) =>
    Easing.inOut(Easing.out(Easing.elastic(bounciness))),

  easeInBounce: Easing.out(Easing.bounce),
  easeOutBounce: Easing.in(Easing.bounce),
  easeInOutBounce: Easing.inOut(Easing.out(Easing.bounce)),
}
