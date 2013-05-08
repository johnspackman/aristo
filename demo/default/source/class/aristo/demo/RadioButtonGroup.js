qx.Class.define("aristo.demo.RadioButtonGroup",
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
        // using VBox
        var labelVBox = new qx.ui.basic.Label("<strong>Vertical:</strong>");
        labelVBox.setRich(true);
        this.add(labelVBox, {left: 10, top: 10});
        this.add(labelVBox, {left: 10, top: 10});
        var radioButtonGroupVBox = new qx.ui.form.RadioButtonGroup();
        radioButtonGroupVBox.setLayout(new qx.ui.layout.VBox(2));
        this.addButtons(radioButtonGroupVBox, ["Red", "Green", "Blue"]);
        this.add(radioButtonGroupVBox, {left: 100, top: 10});

        // using HBox
        var labelHBox = new qx.ui.basic.Label("<strong>Horizontal:</strong>");
        labelHBox.setRich(true);
        this.add(labelHBox, {left: 10, top: 70});
        var radioButtonGroupHBox = new qx.ui.form.RadioButtonGroup();
        radioButtonGroupHBox.setLayout(new qx.ui.layout.HBox(5));
        this.addButtons(radioButtonGroupHBox, ["female", "male"]);
        this.add(radioButtonGroupHBox, {left: 100, top: 70});

        // using Grid
        var labelGrid = new qx.ui.basic.Label("<strong>Grid:</strong>");
        labelGrid.setRich(true);
        this.add(labelGrid, {left: 10, top: 100});
        var radioButtonGroupGrid = new qx.ui.form.RadioButtonGroup();
        radioButtonGroupGrid.setLayout(new qx.ui.layout.Grid(10, 10));
        radioButtonGroupGrid.add(new qx.ui.form.RadioButton("0,1"), {row: 0, column: 1});
        radioButtonGroupGrid.add(new qx.ui.form.RadioButton("1,0"), {row: 1, column: 0});
        radioButtonGroupGrid.add(new qx.ui.form.RadioButton("1,1"), {row: 1, column: 1});
        radioButtonGroupGrid.add(new qx.ui.form.RadioButton("1,2"), {row: 1, column: 2});
        radioButtonGroupGrid.add(new qx.ui.form.RadioButton("2,1"), {row: 2, column: 1});
        this.add(radioButtonGroupGrid, {left: 100, top: 100});
    }, this);
    },


    addButtons : function(group, names)
    {
      for (var i = 0; i < names.length; i++) {
        group.add(new qx.ui.form.RadioButton(names[i]));
      }
    }

  }

});

