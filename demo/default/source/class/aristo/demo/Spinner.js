qx.Class.define("aristo.demo.Spinner",
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

      var layout = new qx.ui.layout.Grid(10, 8);
      layout.setColumnAlign(0, "left", "middle");
      layout.setColumnAlign(1, "right", "middle");
      layout.setColumnAlign(2, "left", "middle");
      layout.setColumnAlign(3, "left", "middle");

      var container = new qx.ui.container.Composite(layout);
      container.setPadding(10);

    this.addListenerOnce("appear", function(e)
      {
        this.add(container, {left:0,top:0});
    }, this);

      this.addSimpleSpinner(container, 0);
      this.addNonEditableSpinner(container, 1);
      this.addWrappingSpinner(container, 2);
      this.addSteppedSpinner(container, 3);
      this.addDisabledSpinner(container, 4);
      this.addFormattedSpinner(container, 5);

    },

    addSimpleSpinner : function(container, row)
    {
      var spinner = new qx.ui.form.Spinner();
      container.add(new qx.ui.basic.Label("Simple"), {column: 0, row: row});
      container.add(new qx.ui.basic.Label("0"), {column: 1, row: row});
      container.add(spinner, {column: 2, row: row});
      container.add(new qx.ui.basic.Label("100"), {column: 3, row: row});

      spinner.addListener("changeValue", function(e) {
        this.debug("ChangeValue: " + e.getData());
      });
    },

    addNonEditableSpinner : function(container, row)
    {
      var spinner = new qx.ui.form.Spinner(0, 50, 100);
      spinner.setEditable(false);
      container.add(new qx.ui.basic.Label("Not Editable"), {column: 0, row: row});
      container.add(new qx.ui.basic.Label("0"), {column: 1, row: row});
      container.add(spinner, {column: 2, row: row});
      container.add(new qx.ui.basic.Label("100"), {column: 3, row: row});
    },

    addWrappingSpinner : function(container, row)
    {
      var spinner = new qx.ui.form.Spinner(-30, 30, 30);
      spinner.setWrap(true);
      container.add(new qx.ui.basic.Label("Wrap"), {column: 0, row: row});
      container.add(new qx.ui.basic.Label("-30"), {column: 1, row: row});
      container.add(spinner, {column: 2, row: row});
      container.add(new qx.ui.basic.Label("30"), {column: 3, row: row});
    },

    addSteppedSpinner : function(container, row)
    {
      var spinner = new qx.ui.form.Spinner(-3000, 0, 3000).set({
        singleStep: 25
      });
      container.add(new qx.ui.basic.Label("Stepped"), {column: 0, row: row});
      container.add(new qx.ui.basic.Label("-3000"), {column: 1, row: row});
      container.add(spinner, {column: 2, row: row});
      container.add(new qx.ui.basic.Label("3000"), {column: 3, row: row});
    },

    addDisabledSpinner : function(container, row)
    {
      var spinner = new qx.ui.form.Spinner;
      spinner.setEnabled(false);
      container.add(new qx.ui.basic.Label("Disabled"), {column: 0, row: row});
      container.add(new qx.ui.basic.Label("0"), {column: 1, row: row});
      container.add(spinner, {column: 2, row: row});
      container.add(new qx.ui.basic.Label("100"), {column: 3, row: row++});
    },

    addFormattedSpinner : function(container, row)
    {
      var spinner = new qx.ui.form.Spinner(0, 200, 300);
      spinner.setSingleStep(0.5);
      spinner.setWidth(70);

      // Number format Test
      var nf = new qx.util.format.NumberFormat();
      nf.setMinimumFractionDigits(2);
      nf.setMaximumFractionDigits(2);
      spinner.setNumberFormat(nf);

      container.add(new qx.ui.basic.Label("Number format"), {column: 0, row: row});
      container.add(new qx.ui.basic.Label("0"), {column: 1, row: row});
      container.add(spinner, {column: 2, row: row});
      container.add(new qx.ui.basic.Label("300"), {column: 3, row: row++});
    }
  }

});

