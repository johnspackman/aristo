qx.Class.define("aristo.demo.ColorWindow",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

    this.setCaption("Color Selector");

    qx.util.AliasManager.getInstance().add("decoration", "aristo/decoration");

    this._createControls();
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members:
  {
    _createControls: function()
    {
      var layout = new qx.ui.layout.VBox(16);

      this.set({
        layout: layout,
        height: 260,
        width: 400
      // contentPadding: [0, 5, 5, 5]
      });

      var box = new qx.ui.container.Composite().set(
      {
        // minWidth   : 180,
        // minHeight  : 280,
        layout: new qx.ui.layout.VBox(),
        padding    : 3,
        allowGrowX : true,
        allowGrowY : true
      });

      var mycolor = new qx.ui.control.ColorSelector;
      box.add(mycolor);

    this.addListenerOnce("appear", function(e)
      {
      this.add(box, {flex: 1});
    this.moveTo(350, 150);
    }, this);
    }
  }

});

