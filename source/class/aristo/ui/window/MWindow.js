qx.Mixin.define("aristo.ui.window.MWindow", {
  members: {
    // overridden
    _createChildControlImpl: function (id) {
      var control = null;
      if (id == "pane") {
        control = new qx.ui.container.Composite();
        control.getContentElement().removeStyle("overflowX", true);
        control.getContentElement().removeStyle("overflowY", true);
        this._add(control, {
          flex: 1
        });
      }
      return control || this.base(arguments, id);
    }
  }
});
