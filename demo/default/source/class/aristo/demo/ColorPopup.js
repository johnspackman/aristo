qx.Class.define("aristo.demo.ColorPopup",
{
  extend: qx.ui.groupbox.GroupBox,

  construct: function()
  {
    this.base(arguments);

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
      var layout = new qx.ui.layout.VBox();
      this.set({layout: layout, contentPadding: 10});

      var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));

      var mypop = new qx.ui.control.ColorPopup();
      mypop.exclude();
      mypop.setValue("#23F3C1");

      mypop.addListener("changeValue", function(e) {
        this.debug("Value Listener: " + e.getData());
        myview.setBackgroundColor(e.getData());
      });

      var mybtn = new qx.ui.form.Button("Open Popup");
      mybtn.addListener("execute", function(e)
      {
        mypop.placeToWidget(mybtn);
        mypop.show();
      });

      var myview = new qx.ui.basic.Label("Selected Color").set({
        marginLeft: 10,
        padding : [3, 6],
        decorator : "main"
      });

      container.add(mybtn);
      container.add(myview);

    this.addListenerOnce("appear", function(e)
      {
        this.add(container);
    }, this);
    }
  }

});

