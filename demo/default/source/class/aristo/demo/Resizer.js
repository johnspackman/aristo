qx.Class.define("aristo.demo.Resizer",
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

    this.addListenerOnce("appear", function(e)
      {
        this.add(this._getResizer(), {left: 20, top: 20});
        this.add(this._getResizerList(), {left: 400, top: 20});
    }, this);
    },


    _getResizerList : function()
    {
      var list = new qx.ui.form.List().set({
        width: 100,
        height: 200,
        minWidth: 50,
        minHeight: 100,
        maxHeight: 400,
        maxWidth: 500,
        textColor: "text-active"
      });

      for (var i = 0; i < 100; i++) {
        list.add(new qx.ui.form.ListItem('Option number '+i));
      }

      var resizer = new qx.ui.container.Resizer();
      resizer.setLayout(new qx.ui.layout.Grow());
      resizer.add(list);

      return resizer;
    },


    _getResizer : function()
    {
      var tArea = new qx.ui.form.TextArea;
      tArea.setValue("Resize me\nI'm resizable");

      var resizer = new qx.ui.container.Resizer().set({
        minWidth: 100,
        minHeight: 50,
        width: 200,
        height: 100,
        resizableTop : false,
        resizableLeft : false
      });

      resizer.setLayout(new qx.ui.layout.Canvas());
      resizer.add(tArea, {top: 0, right: 0, bottom: 0, left: 0});

      return resizer;
    }

  }

});

