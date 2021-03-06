const config = {
  inject: !0,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
  classes: !0,
  classNames: { valid: "is-valid", invalid: "is-invalid" },
};
Vue.use(VeeValidate, config);
const vee = new VeeValidate(config, Vue);
function vee_getMessage(e, a) {
  var t = document.getElementsByName(e);
  if (t && t[0]) {
    var r = t[0].getAttribute("data-val-" + a);
    if (r) return r;
  }
}
vee._validator.extend("required", {
  getMessage: (e) => {
    var a = vee_getMessage(e, "required");
    return a || "The " + e + " field is required.";
  },
  validate: (e) => !!e,
}),
  vee._validator.extend("email", {
    getMessage: (e) => {
      var a = vee_getMessage(e, "email");
      return a || "This field must be a valid email.";
    },
    validate: (e) =>
      !e || !!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e),
  }),
  vee._validator.extend("confirmed", {
    paramNames: ["targetValue"],
    validate: function (e, a) {
      return e === a.targetValue;
    },
    options: { hasTarget: !0 },
    getMessage: (e) => {
      var a = vee_getMessage(e, "password");
      return a || "Password confirmation does not match";
    },
  }),
  vee._validator.extend("min", {
    getMessage: (e) => {
      var a = vee_getMessage(e, "length");
      return a || "This " + e + " should have at least  characters.";
    },
    options: { hasTarget: !0 },
    paramNames: ["targetValue"],
    validate: function (e, a) {
      if (!e) return !0;
      var t = document.getElementsByName(a.targetValue),
        r = parseInt(t[0].getAttribute("data-val-length-min"));
      return !(e.length < r);
    },
  });
