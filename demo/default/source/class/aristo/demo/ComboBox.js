qx.Class.define("aristo.demo.ComboBox",
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
        this.createDefaultExample();
        this.createIconExample();
        this.createHtmlExample();
        this.createWideExample();
    }, this);
    },

    createDefaultExample: function()
    {
      var label = new qx.ui.basic.Label("Default");
      label.setFont("bold");

      this.add(label,
      {
        left : 20,
        top  : 25
      });

      // create a combo box
      var comboBox = new qx.ui.form.ComboBox();

      // fill the combo box with some stuff
      for (var i=1; i<31; i++)
      {
        var tempItem = new qx.ui.form.ListItem("2^ " + i + " = " + Math.pow(2, i));
        comboBox.add(tempItem);
      }

      comboBox.addListener("changeValue", function(e) {
        this.debug("ChangeValue: " + e.getData());
      });

      // add the combobox to the documents root
      this.add(comboBox,
      {
        left : 20,
        top  : 40
      });
    },

    createIconExample : function()
    {
      // create and add the describing label
      var label = new qx.ui.basic.Label("With icons");
      label.setFont("bold");

      this.add(label,
      {
        left : 160,
        top  : 25
      });

      // create a combo box
      var comboBox = new qx.ui.form.ComboBox();

      // fill the combo box with some stuff
      for (var i=1; i<31; i++)
      {
        var tempItem = new qx.ui.form.ListItem(i + "'s Icon", "icon/16/places/folder.png");
        comboBox.add(tempItem);
      }

      // add the combobox to the documents root
      this.add(comboBox,
      {
        left : 160,
        top  : 40
      });
    },

    /**
     * Creates a HTML example.
     * This means that a combobox will be created and filled with
     * some text, that contain HTML tags and entities.
     *
     * @return {void}
     */
    createHtmlExample : function()
    {
      // create and add the describing label
      var label = new qx.ui.basic.Label("With HTML (rich) text");
      label.setFont("bold");

      this.add(label,
      {
        left : 300,
        top  : 25
      });

      // create a combo box
      var comboBox = new qx.ui.form.ComboBox().set({width: 200});

      var items = ["... &gt; (as literal HTML entity)",
                   "... &gt; (as Richtext)",
                   "<b>Bold Text</b>",
                   "<u>Underlined Text</u>",
                   "<i>Italic Text</i>",
                   "HTML entities: &laquo; &lt; &amp; &gt; &raquo;"];

      // fill the combo box with some stuff
      for (var i = 0; i < items.length; i++)
      {
        var tempItem = new qx.ui.form.ListItem(items[i]);

        if (i > 0) {
          tempItem.setRich(true);
        }

        comboBox.add(tempItem);
      }

      // add the combobox to the documents root
      this.add(comboBox,
      {
        left : 300,
        top  : 40
      });
    },

    createWideExample : function()
    {
      // create and add the describing label
      var label = new qx.ui.basic.Label("Wide, long list");
      label.setFont("bold");

      this.add(label,
      {
        left : 20,
        top  : 285
      });

      // create a combo box
      var comboBox = new qx.ui.form.ComboBox();
      comboBox.setWidth(300);

      // fill the combo box with some stuff
      for (var i=1; i<101; i++)
      {
        var tempItem = new qx.ui.form.ListItem(i + "'s Item");
        comboBox.add(tempItem);
      }
      comboBox.setValue(comboBox.getChildrenContainer().getSelectables()[0].getLabel());

      // add the combobox to the documents root
      this.add(comboBox,
      {
        left : 20,
        top  : 300
      });
    }
  }

});

