qx.Class.define("aristo.demo.Popup",
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
      var layout = new qx.ui.layout.Canvas();
      this.set({layout: layout, contentPadding: 10});

      var box = new qx.ui.layout.HBox();
      box.setSpacing(20);

      var container = new qx.ui.container.Composite(box).set({
        padding: 20
      })

    this.addListenerOnce("appear", function(e)
      {
        this.add(container);
    }, this);

      container.add(this._getPopupButton1());
      container.add(this._getPopupButton2());
    },


    _getPopupButton1 : function()
    {
      var button = new qx.ui.form.Button("Open Popup #1");

      var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
        backgroundColor: "#FFFAD3",
        padding: [2, 4],
        offset : 3,
        offsetBottom : 20
      });

      popup.add(new qx.ui.basic.Atom("Hello World #1", "icon/32/apps/media-photo-album.png"));

      button.addListener("click", function(e)
      {
        popup.placeToMouse(e);
        popup.show();
      }, this);

      return button;
    },


    _getPopupButton2 : function()
    {
      var button = new qx.ui.form.Button("Open Popup #2");

      var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
        backgroundColor: "#DFFAD3",
        padding: [2, 4],
        offset : 3,
        position : "top-right"
      });

      popup.add(new qx.ui.basic.Atom("Hello World #2", "icon/32/apps/media-photo-album.png"));

      button.addListener("click", function(e)
      {
        popup.placeToMouse(e);
        popup.show();
      }, this);

      return button;
    }
  }

});

