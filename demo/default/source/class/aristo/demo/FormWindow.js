qx.Class.define("aristo.demo.FormWindow",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

  this.setCaption("Form Widgets");
    this._createControls();
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    _createControls: function()
    {
      var layout = new qx.ui.layout.Grid(1, 5);
      this.set({layout: layout, status: "Status text"});

    this.add(this.getTextFieldBox(), {row: 0, column: 0});
      this.add(this.getButtonBox(), {row: 0, column: 1});
      this.add(this.getSelectionBox(), {row: 1, column: 0, rowSpan: 2});
      this.add(this.getBooleanBox(), {row: 1, column: 1});
      this.add(this.getNumBox(), {row: 2, column: 1});
      this.add(this.getBottomBox(), {row: 3, column: 0, colSpan: 2});

    this.addListenerOnce("appear", function(e)
      {
      this.center();
    }, this);
    },

    getTextFieldBox: function()
    {
      var tfLabel1 = new qx.ui.basic.Label("TextField:");
      var tf1 = new qx.ui.form.TextField();
      tf1.setPlaceholder("placeholder");
      tf1.setReadOnly(false);

      var tfLabel2 = new qx.ui.basic.Label("PasswordField:");
      var tf2 = new qx.ui.form.PasswordField();
      tf2.setPlaceholder("placeholder");

      var tfLabel3 = new qx.ui.basic.Label("TextArea:");
      var tf3 = new qx.ui.form.TextArea();
      tf3.setPlaceholder("placeholder");
      tf3.setAlignY("top");

      var comboLabel1 = new qx.ui.basic.Label("ComboBox");
      var combo1 = new qx.ui.form.ComboBox();
      combo1.setPlaceholder("placeholder");
      combo1.add(new qx.ui.form.ListItem("Item 1"));
      combo1.add(new qx.ui.form.ListItem("Item 2"));
      combo1.add(new qx.ui.form.ListItem("Item 3"));
      combo1.add(new qx.ui.form.ListItem("Item 4"));

      var dfLabel1 = new qx.ui.basic.Label("DateField:");
      var df1 = new qx.ui.form.DateField();

      var tfBoxLayout = new qx.ui.layout.Grid(5, 5);
      tfBoxLayout.setColumnAlign(0, "right", "middle");

      var tfBox = new qx.ui.groupbox.GroupBox("Text");
      tfBox.set({layout: tfBoxLayout, margin: 5});
      tfBox.add(tfLabel1, {row: 0, column: 0});
      tfBox.add(tf1, {row: 0, column: 1});
      tfBox.add(tfLabel2, {row: 1, column: 0});
      tfBox.add(tf2, {row: 1, column: 1});
      tfBox.add(tfLabel3, {row: 2, column: 0});
      tfBox.add(tf3, {row: 2, column: 1});
      tfBox.add(comboLabel1, {row: 3, column: 0});
      tfBox.add(combo1, {row: 3, column: 1});
      tfBox.add(dfLabel1, {row: 4, column: 0});
      tfBox.add(df1, {row: 4, column: 1});

      return tfBox;
    },

    getButtonBox: function()
    {
      var btnLabel0 = new qx.ui.basic.Label("Button:");
      var btn0 = new qx.ui.form.Button("Button");
      btn0.set({width: 100});

      /*var btnLabel1 = new qx.ui.basic.Label("Red Button:");
      var btn1 = new qx.ui.form.Button("Red Button");
      btn1.setAppearance("button-red");
      */

      var btnLabel2 = new qx.ui.basic.Label("ToggleButton:");
      var btn2 = this.btn2 = new qx.ui.form.ToggleButton("ToggleButton");

      var btnLabel3 = new qx.ui.basic.Label("RepeatButton:");
      var btn3 = new qx.ui.form.RepeatButton("0");
      btn3.addListener("execute", function()
      {
        var tempValue = parseInt(btn3.getLabel()) + 1;
        btn3.setLabel(tempValue.toString());
      });

      var btnLabel4 = new qx.ui.basic.Label("MenuButton:");
      var btn4 = new qx.ui.form.MenuButton("MenuButton", null, this.getViewMenu());

      var btnLabel5 = new qx.ui.basic.Label("SplitButton:");
      var btn5 = new qx.ui.form.SplitButton("SplitButton", null, this.getBackMenu());

      var btnBoxLayout = new qx.ui.layout.Grid(5, 5);
      btnBoxLayout.setColumnAlign(0, "right", "middle");

      var btnBox = new qx.ui.groupbox.GroupBox("Buttons");
      btnBox.set({layout: btnBoxLayout, margin: 5});
      btnBox.add(btnLabel0, {row: 0, column: 0});
      btnBox.add(btn0, {row: 0, column: 1});
      //btnBox.add(btnLabel1, {row: 1, column: 0});
      //btnBox.add(btn1, {row: 1, column: 1});
      btnBox.add(btnLabel2, {row: 2, column: 0});
      btnBox.add(btn2, {row: 2, column: 1});
      btnBox.add(btnLabel3, {row: 3, column: 0});
      btnBox.add(btn3, {row: 3, column: 1});
      btnBox.add(btnLabel4, {row: 4, column: 0});
      btnBox.add(btn4, {row: 4, column: 1});
      btnBox.add(btnLabel5, {row: 5, column: 0});
      btnBox.add(btn5, {row: 5, column: 1});

      return btnBox;
    },

    /*
    -------------------------------------------------------------------------
      Selection
    -------------------------------------------------------------------------
    */
    getSelectionBox: function()
    {
      var selLabel1 = new qx.ui.basic.Label("SelectBox:");
      var sel1 = new qx.ui.form.SelectBox();

      var listItem = new qx.ui.form.ListItem("Item 1");
      sel1.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 2");
      sel1.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 3");
      sel1.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 4");
      sel1.add(listItem);

      var selLabel2 = new qx.ui.basic.Label("List:");
      var sel2 = new qx.ui.form.List();
      sel2.set({height: 60, textColor: "text-active"});

      var listItem = new qx.ui.form.ListItem("Item 1");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 2");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 3");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 4");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 5");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 6");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 7");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 8");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 9");
      sel2.add(listItem);
      listItem = new qx.ui.form.ListItem("Item 10");
      sel2.add(listItem);

      var selLabel3 = new qx.ui.basic.Label("RadioButtonGroup:");
      var sel3 = new qx.ui.form.RadioButtonGroup(new qx.ui.layout.Grid(3, 3));

      var listItem = new qx.ui.form.RadioButton("Option 1");
      sel3.add(listItem, {row: 0, column: 0});
      listItem = new qx.ui.form.RadioButton("Option 2");
      sel3.add(listItem, {row: 0, column: 1});
      listItem = new qx.ui.form.RadioButton("Option 3");
      sel3.add(listItem, {row: 1, column: 0});
      listItem = new qx.ui.form.RadioButton("Option 4");
      sel3.add(listItem, {row: 1, column: 1});

      var selBoxLayout = new qx.ui.layout.Grid(5, 5);
      selBoxLayout.setColumnAlign(0, "right", "middle");

      var selBox = new qx.ui.groupbox.GroupBox("Selection");
      selBox.set({layout: selBoxLayout, margin: 5});
      selBox.add(selLabel1, {row: 0, column: 0});
      selBox.add(sel1, {row: 0, column: 1});
      selBox.add(selLabel2, {row: 1, column: 0});
      selBox.add(sel2, {row: 1, column: 1});
      selBox.add(selLabel3, {row: 2, column: 0});
      selBox.add(sel3, {row: 2, column: 1});

      return selBox;
    },

    /*
    -------------------------------------------------------------------------
      Boolean
    -------------------------------------------------------------------------
    */
    getBooleanBox: function()
    {
      var boolLabel1 = new qx.ui.basic.Label("CheckBox:");
      var bool1 = new qx.ui.form.CheckBox("CheckBox");

      var boolLabel2 = new qx.ui.basic.Label("RadioButtons:");
      var bool2 = new qx.ui.form.RadioButton("RadioButton");

      var boolBoxLayout = new qx.ui.layout.Grid(5, 5);
      boolBoxLayout.setColumnAlign(0, "right", "middle");

      var boolBox = new qx.ui.groupbox.GroupBox("Boolean");
      boolBox.set({layout: boolBoxLayout, margin: 5});
      boolBox.add(boolLabel1, {row: 0, column: 0});
      boolBox.add(bool1, {row: 0, column: 1});
      boolBox.add(boolLabel2, {row: 1, column: 0});
      boolBox.add(bool2, {row: 1, column: 1});

      return boolBox;
    },

    /*
    -------------------------------------------------------------------------
      Number
    -------------------------------------------------------------------------
    */
    getNumBox: function()
    {
      var numLabel1 = new qx.ui.basic.Label("Spinner:");
      var num1 = new qx.ui.form.Spinner(0, 0, 100);

      var numLabel2 = new qx.ui.basic.Label("Slider:");
      var num2 = new qx.ui.form.Slider();

      var numBoxLayout = new qx.ui.layout.Grid(5, 5);
      numBoxLayout.setColumnAlign(0, "right", "middle");
      numBoxLayout.setColumnWidth(1, 130);

      var numBox = new qx.ui.groupbox.GroupBox("Number");
      numBox.set({layout: numBoxLayout, margin: 5});
      numBox.add(numLabel1, {row: 0, column: 0});
      numBox.add(num1, {row: 0, column: 1});
      numBox.add(numLabel2, {row: 1, column: 0});
      numBox.add(num2, {row: 1, column: 1});

      num1.bind("value", num2, "value");
        num2.bind("value", num1, "value");

      return numBox;
    },

    getBottomBox: function()
    {
      var okButton = new qx.ui.form.Button("OK");
      okButton.set({width: 100});
      okButton.addListener("execute", this.close, this);

      var cancelButton = new qx.ui.form.Button("Cancel");
      cancelButton.set({width: 100 /*, appearance: "button-red"*/ });
      cancelButton.addListener("execute", this.close, this);

      var layout = new qx.ui.layout.HBox(10);
      layout.set({alignX: "center"});

      var bottomBox = new qx.ui.container.Composite(layout);
      bottomBox.add(okButton);
      bottomBox.add(cancelButton);

      return bottomBox;
    },

    getViewMenu: function()
    {
      var menu = new qx.ui.menu.Menu;

      var panesButton = new qx.ui.menu.Button("Panes", null, null, this.getPanesMenu());
      var syntaxButton = new qx.ui.menu.Button("Syntax", null, null, this.getSyntaxMenu());
      var rulerButton = new qx.ui.menu.CheckBox("Show ruler");
      var numbersButton = new qx.ui.menu.CheckBox("Show line numbers");
      var asciiButton = new qx.ui.menu.Button("ASCII table");

      menu.add(panesButton);
      menu.add(syntaxButton);
      menu.addSeparator();
      menu.add(rulerButton);
      menu.add(numbersButton);
      menu.addSeparator();
      menu.add(asciiButton);

      return menu;
    },

    getPanesMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var tabsCheckbox = new qx.ui.menu.CheckBox("Show tabs");
      var statusCheckbox = new qx.ui.menu.CheckBox("Show status bar");

      var treeCheckbox = new qx.ui.menu.CheckBox("Show tree");
      var macroCheckbox = new qx.ui.menu.CheckBox("Show macros");
      var tagCheckbox = new qx.ui.menu.CheckBox("Show tags");
      var consoleCheckbox = new qx.ui.menu.CheckBox("Show console");

      tabsCheckbox.setValue(true);
      statusCheckbox.setValue(true);
      macroCheckbox.setValue(true);

      menu.add(statusCheckbox);
      menu.add(tabsCheckbox);
      menu.addSeparator();
      menu.add(treeCheckbox);
      menu.add(macroCheckbox);
      menu.add(tagCheckbox);
      menu.add(consoleCheckbox);

      return menu;
    },

    getSyntaxMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var htmlButton = new qx.ui.menu.RadioButton("HTML");
      var xmlButton = new qx.ui.menu.RadioButton("XML");
      var jsButton = new qx.ui.menu.RadioButton("JavaScript");
      var cdialectButton = new qx.ui.menu.Button("C Dialect", null, null, this.getSyntaxCMenu());
      var perlButton = new qx.ui.menu.RadioButton("Perl");
      var pythonButton = new qx.ui.menu.RadioButton("Python");

      menu.add(htmlButton);
      menu.add(xmlButton);
      menu.add(jsButton);
      menu.add(cdialectButton);
      menu.add(perlButton);
      menu.add(pythonButton);

      // Configure and fill radio group
      var langGroup = new qx.ui.form.RadioGroup;
      langGroup.add(htmlButton, xmlButton, jsButton, perlButton, pythonButton);
      langGroup.add.apply(langGroup, cdialectButton.getMenu().getChildren());

      return menu;
    },

    getSyntaxCMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var cButton = new qx.ui.menu.RadioButton("C");
      var csharpButton = new qx.ui.menu.RadioButton("C Sharp");
      var objcButton = new qx.ui.menu.RadioButton("Objective C");
      var cplusButton = new qx.ui.menu.RadioButton("C Plus Plus");

      menu.add(cButton);
      menu.add(csharpButton);
      menu.add(objcButton);
      menu.add(cplusButton);

      return menu;
    },

    getBackMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var button1 = new qx.ui.menu.Button("Line 313");
      var button2 = new qx.ui.menu.Button("Line 1039");
      var button3 = new qx.ui.menu.Button("Line 12");
      var button4 = new qx.ui.menu.Button("Line 26");

      menu.add(button1);
      menu.add(button2);
      menu.add(button3);
      menu.add(button4);

      return menu;
    }

  }
});