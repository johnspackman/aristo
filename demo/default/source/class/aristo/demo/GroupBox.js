qx.Class.define("aristo.demo.GroupBox",
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

      // create the main layout
      var mainLayout = new qx.ui.layout.VBox();
      mainLayout.setSpacing(20);

      // add the main layout to a container widget and to the document root
      var container = new qx.ui.container.Composite(mainLayout);
      container.setPadding(20);

    this.addListenerOnce("appear", function(e)
      {
        this.add(container, {left:0,top:0});
    }, this);

      // create the first group box
      var box1 = new qx.ui.groupbox.GroupBox("Code Assist", "icon/16/apps/utilities-text-editor.png");
      container.add(box1);

      box1.setLayout(new qx.ui.layout.VBox());
      box1.add(new qx.ui.form.CheckBox("Show debugging content"));
      box1.add(new qx.ui.form.CheckBox("Enable code completion"));
      box1.add(new qx.ui.form.CheckBox("Show debugging console"));

      // create the second group box
      var box2 = new qx.ui.groupbox.CheckGroupBox("Expert Settings");
      container.add(box2);

      box2.setLayout(new qx.ui.layout.HBox(12));

      var label2 = new qx.ui.basic.Label("Option #1");
      box2.add(label2);

      var textField2 = new qx.ui.form.TextField("");
      box2.add(textField2);

      // create the third group box
      var box3Helper = new qx.ui.container.Composite(new qx.ui.layout.VBox(4));
      container.add(box3Helper);

      var radioButton1 = new qx.ui.form.RadioButton("Default Settings");
      radioButton1.setMarginLeft(4);
      box3Helper.add(radioButton1);

      var radioButton2 = new qx.ui.form.RadioButton("Custom Settings");
      radioButton2.setMarginLeft(4);
      box3Helper.add(radioButton2);

      var box3 = new qx.ui.groupbox.RadioGroupBox("Advanced Settings");
      box3.setLayout(new qx.ui.layout.HBox(12));
      box3Helper.add(box3);

      new qx.ui.form.RadioGroup(radioButton1, radioButton2, box3);

      var label3 = new qx.ui.basic.Label("Option #1");
      box3.add(label3);

      var textField3 = new qx.ui.form.TextField("");
      box3.add(textField3);
    }
  }

});

