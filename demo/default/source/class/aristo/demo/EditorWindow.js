qx.Class.define("aristo.demo.EditorWindow",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

    this.setCaption("HTML Editor");
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
      var layout = new qx.ui.layout.VBox(0);
      this.set({layout: layout, contentPadding: 2, showStatusbar: true});

      var demoContent = '<h1>About</h1><p>qooxdoo (pronounced [ku:ksdu:]) is a comprehensive and innovative Ajax application framework. Leveraging object-oriented JavaScript allows developers to build impressive cross-browser applications. No <acronym title="HyperText Markup Language">HTML</acronym>, <acronym title="Cascading Style Sheets">CSS</acronym> nor <acronym title="Document Object Model">DOM</acronym> knowledge is needed. qooxdoo includes a platform-independent development tool chain, a state-of-the-art <acronym title="Graphical User Interface">GUI</acronym> toolkit and an advanced client-server communication layer. It is Open Source under an <acronym title="GNU Lesser General Public License">LGPL</acronym>/<acronym title="Eclipse Public License">EPL</acronym> dual <a href="http://qooxdoo.org/license" class="wikilink1" title="license">license</a>.</p>';

      var editor = this.editor = new qx.ui.embed.HtmlArea(demoContent, null,
      qx.util.ResourceManager.getInstance().toUri("aristo.demo/editor/blank.html"));
      editor.set({height: 400, width: 600});

    this.add(this.getMenuBar());
      this.add(this.getToolBar());
      this.add(editor, {flex: 1});

      this.addListenerOnce("appear", function(e)
      {
    this.center();
    }, this);
    },

    getMenuBar: function()
    {
      var fileMenu = new qx.ui.menubar.Button("File", null, this.getFileMenu());
      var editMenu = new qx.ui.menubar.Button("Edit", null, this.getEditMenu());
      var searchMenu = new qx.ui.menubar.Button("Search", null, this.getSearchMenu());
      var viewMenu = new qx.ui.menubar.Button("View", null, this.getViewMenu());
      var formatMenu = new qx.ui.menubar.Button("Format", null, this.getFormatMenu());
      var helpMenu = new qx.ui.menubar.Button("Help", null, this.getHelpMenu());

      var menuBar = new qx.ui.menubar.MenuBar;
      menuBar.add(fileMenu);
      menuBar.add(editMenu);
      menuBar.add(searchMenu);
      menuBar.add(viewMenu);
      menuBar.add(formatMenu);
      menuBar.addSpacer();
      menuBar.add(helpMenu);

      return menuBar;
    },

    getFileMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var newButton = new qx.ui.menu.Button("New", "icon/16/actions/document-new.png");
      var openButton = new qx.ui.menu.Button("Open", "icon/16/actions/document-open.png");
      var closeButton = new qx.ui.menu.Button("Close");
      var saveButton = new qx.ui.menu.Button("Save", "icon/16/actions/document-save.png");
      var saveAsButton = new qx.ui.menu.Button("Save as...", "icon/16/actions/document-save-as.png");
      var printButton = new qx.ui.menu.Button("Print", "icon/16/actions/document-print.png");
      var exitButton = new qx.ui.menu.Button("Exit", "icon/16/actions/application-exit.png");

      menu.add(newButton);
      menu.add(openButton);
      menu.add(closeButton);
      menu.add(saveButton);
      menu.add(saveAsButton);
      menu.add(printButton);
      menu.add(exitButton);

      return menu;
    },

    getEditMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var undoButton = new qx.ui.menu.Button("Undo", "icon/16/actions/edit-undo.png");
      var redoButton = new qx.ui.menu.Button("Redo", "icon/16/actions/edit-redo.png");
      var cutButton = new qx.ui.menu.Button("Cut", "icon/16/actions/edit-cut.png");
      var copyButton = new qx.ui.menu.Button("Copy", "icon/16/actions/edit-copy.png");
      var pasteButton = new qx.ui.menu.Button("Paste", "icon/16/actions/edit-paste.png");

      menu.add(undoButton);
      menu.add(redoButton);
      menu.addSeparator();
      menu.add(cutButton);
      menu.add(copyButton);
      menu.add(pasteButton);

      return menu;
    },

    getSearchMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var searchButton = new qx.ui.menu.Button("Search...", "icon/16/actions/system-search.png");
      var nextButton = new qx.ui.menu.Button("Search next...");
      var previousButton = new qx.ui.menu.Button("Search previous...");
      var replaceButton = new qx.ui.menu.Button("Replace");
      var searchFilesButton = new qx.ui.menu.Button("Search in files", "icon/16/actions/system-search.png");
      var replaceFilesButton = new qx.ui.menu.Button("Replace in files");

      previousButton.setEnabled(false);

      menu.add(searchButton);
      menu.add(nextButton);
      menu.add(previousButton);
      menu.add(replaceButton);
      menu.addSeparator();
      menu.add(searchFilesButton);
      menu.add(replaceFilesButton);

      return menu;
    },

    getViewMenu : function()
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

    getFormatMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var paragraphButton = new qx.ui.menu.Button("Paragraph", null, null, this.getParagraphMenu());
      var spacesButton = new qx.ui.menu.Button("Tabs to spaces");
      var tabsButton = new qx.ui.menu.Button("Spaces to tabs");
      var upperButton = new qx.ui.menu.Button("Uppercase");
      var lowerButton = new qx.ui.menu.Button("Lowercase");
      var capitalsButton = new qx.ui.menu.Button("Capitals");
      var ansiButton = new qx.ui.menu.Button("OEM to ANSI");
      var oemButton = new qx.ui.menu.Button("ANSI to OEM");

      menu.add(paragraphButton)
      menu.add(spacesButton);
      menu.add(tabsButton);
      menu.addSeparator();
      menu.add(upperButton);
      menu.add(lowerButton);
      menu.add(capitalsButton);
      menu.addSeparator();
      menu.add(ansiButton);
      menu.add(oemButton);

      return menu;
    },

    getParagraphMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var leftButton = new qx.ui.menu.Button("Left aligned", "icon/16/actions/format-justify-left.png");
      var rightButton = new qx.ui.menu.Button("Right aligned", "icon/16/actions/format-justify-right.png");
      var centeredButton = new qx.ui.menu.Button("Centered", "icon/16/actions/format-justify-center.png");
      var justifyButton = new qx.ui.menu.Button("Justified", "icon/16/actions/format-justify-fill.png");

      menu.add(leftButton);
      menu.add(rightButton);
      menu.add(centeredButton);
      menu.add(justifyButton);

      return menu;
    },

    getHelpMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var topicsButton = new qx.ui.menu.Button("Topics", "icon/16/apps/utilities-help.png");
      var quickButton = new qx.ui.menu.Button("Quickstart");
      var onlineButton = new qx.ui.menu.Button("Online Forum");
      var infoButton = new qx.ui.menu.Button("Info...");

      menu.add(topicsButton);
      menu.add(quickButton);
      menu.addSeparator();
      menu.add(onlineButton);
      menu.addSeparator();
      menu.add(infoButton);

      return menu;
    },

  getToolbarEntries : function()
    {
      return [
        {
          bold:                { text: "Format Bold", image: "qx/icon/Oxygen/16/actions/format-text-bold.png", action: this.editor.setBold },
          italic:              { text: "Format Italic", image: "qx/icon/Oxygen/16/actions/format-text-italic.png", action: this.editor.setItalic },
          underline:           { text: "Format Underline", image: "qx/icon/Oxygen/16/actions/format-text-underline.png", action: this.editor.setUnderline },
          strikethrough:       { text: "Format Strikethrough", image: "qx/icon/Oxygen/16/actions/format-text-strikethrough.png", action: this.editor.setStrikeThrough },
          removeFormat:        { text: "Remove Format", image: "qx/icon/Oxygen/16/actions/edit-clear.png", action: this.editor.removeFormat }
        },

        {
          alignLeft:           { text: "Align Left", image: "qx/icon/Oxygen/16/actions/format-justify-left.png", action: this.editor.setJustifyLeft },
          alignCenter:         { text: "Align Center", image: "qx/icon/Oxygen/16/actions/format-justify-center.png", action: this.editor.setJustifyCenter },
          alignRight:          { text: "Align Right", image: "qx/icon/Oxygen/16/actions/format-justify-right.png", action: this.editor.setJustifyRight },
          alignJustify:        { text: "Align Justify", image: "qx/icon/Oxygen/16/actions/format-justify-fill.png", action: this.editor.setJustifyFull }
        },

        {
          fontFamily:          { custom: this.__fontFamilyToolbarEntry },
          fontSize:            { custom: this.__fontSizeToolbarEntry },
          fontColor:           { text: "Set Text Color", image:  "aristo.demo/editor/format-text-color.png", action: this.__fontColorHandler },
          textBackgroundColor: { text: "Set Text Background Color", image:  "aristo.demo/editor/format-fill-color.png", action: this.__textBackgroundColorHandler }
        },

        {
          indent:              { text: "Indent More", image: "qx/icon/Oxygen/16/actions/format-indent-more.png", action: this.editor.insertIndent },
          outdent:             { text: "Indent Less", image: "qx/icon/Oxygen/16/actions/format-indent-less.png", action: this.editor.insertOutdent }
        },


        {
          insertImage:         { text: "Insert Image", image: "qx/icon/Oxygen/16/actions/insert-image.png", action: this.__insertImageHandler },
          insertTable:         { text: "Insert Table", image: "aristo.demo/editor/insert-table.png", action: this.__insertTableHandler },
          insertLink:          { text: "Insert Link", image: "qx/icon/Oxygen/16/actions/insert-link.png", action: this.__insertLinkHandler },
          insertHTML:          { text: "Insert HTML Code", image: "aristo.demo/editor/insert-text.png", action: this.__insertHTMLHandler },
          insertHR:            { text: "Insert Horizontal Ruler", image: "aristo.demo/editor/insert-horizontal-rule.png", action: this.editor.insertHorizontalRuler }
        },

        {
          ol:                  { text: "Insert Ordered List", image: "aristo.demo/editor/format-list-ordered.png", action: this.editor.insertOrderedList },
          ul:                  { text: "Inserted Unordered List", image: "aristo.demo/editor/format-list-unordered.png", action: this.editor.insertUnorderedList }
        },

        {
          undo:                { text: "Undo Last Change", image: "qx/icon/Oxygen/16/actions/edit-undo.png", action: this.editor.undo },
          redo:                { text: "Redo Last Undo Step", image: "qx/icon/Oxygen/16/actions/edit-redo.png", action: this.editor.redo }
        }
      ];
    },

  /* *********************************************
     *
     *      Special handler for Toolbar entries
     *
     * *********************************************
     */

    /**
     * Handler method for font color
     *
     * @param e {qx.event.type.Event} event instance
     */
    __fontColorHandler : function(e)
    {
      var result = window.prompt("Color (Hex): ", "#");
      this.setTextColor(result);
    },


    /**
     * Handler method for text background color
     *
     * @param e {qx.event.type.Event} event instance
     */
    __textBackgroundColorHandler : function(e)
    {
      var result = window.prompt("BgColor (Hex): ", "#");
      this.setTextBackgroundColor(result);
    },


    /**
     * Handler method for inserting images
     *
     * @param e {qx.event.type.Event} event instance
     */
    __insertImageHandler : function(e)
    {
      var attributes = { src    : qx.util.ResourceManager.getInstance().toUri("aristo.demo/logo.png"),
                         border : 0,
                         title  : "qooxdoo logo",
                         alt    : "qooxdoo logo" };

      this.insertImage(attributes);
    },

    /**
     * Handler method for inserting tables
     *
     * @param e {qx.event.type.Event} event instance
     */
    __insertTableHandler : function(e)
    {
      var table = "<table border='1'>" +
                    "<tbody>" +
                      "<tr>" +
                        "<td>First Row, First cell</td>" +
                        "<td>First Row, Second cell</td>" +
                      "</tr>" +
                      "<tr>" +
                        "<td>Second Row, First cell</td>" +
                        "<td>Second Row, Second cell</td>" +
                      "</tr>" +
                    "</tbody>" +
                  "</table>";
      this.insertHtml(table);
    },


    /**
     * Handler method for inserting links
     *
     * @param e {qx.event.type.Event} event instance
     */
    __insertLinkHandler : function(e)
    {
      var createLinkWindow = new qx.ui.window.Window("Insert Hyperlink");
      createLinkWindow.setLayout(new qx.ui.layout.VBox(20));
      createLinkWindow.set({ width: 400, showMaximize: false, showMinimize: false });

      var textField = new qx.ui.form.TextField("http://");
      createLinkWindow.add(textField);

      var hBoxLayout = new qx.ui.layout.HBox(10);
      hBoxLayout.setAlignX("right");
      var buttonContainer = new qx.ui.container.Composite(hBoxLayout);

      var okButton = new qx.ui.form.Button("OK");
      okButton.setWidth(60);
      okButton.addListener("execute", function(e) {
        this.insertHyperLink(textField.getValue());
        createLinkWindow.close();
      }, this);
      buttonContainer.add(okButton);

      var cancelButton = new qx.ui.form.Button("Cancel");
      cancelButton.setWidth(60);
      cancelButton.addListener("execute", function(e) {
        createLinkWindow.close();
      }, this);
      buttonContainer.add(cancelButton);

      createLinkWindow.add(buttonContainer);

      createLinkWindow.center();
      createLinkWindow.open();

      this.saveRange();
    },


    /**
     * Handler method for inserting HTML code
     *
     * @param e {qx.event.type.Event} event instance
     */
    __insertHTMLHandler : function(e)
    {
      var result = window.prompt("HTML Code:", "");
      this.insertHtml(result);
    },


    /* ***************************************
     *
     *            Toolbar info
     *
     * ***************************************
     */

    /**
     * Creates the "font-family" toolbar dropdown
     *
     * @return {qx.ui.form.SelectBox} select box button
     */
    __fontFamilyToolbarEntry : function()
    {
      var button = new qx.ui.form.SelectBox;
      button.set({ toolTipText: "Change Font Family",
                   focusable: false,
                   keepFocus: true,
                   width: 120,
                   height: 16,
                   margin: [ 4, 0 ],
                   textColor: "white"});
      button.add(new qx.ui.form.ListItem(""));

      var entries = ["Tahoma", "Verdana", "Times New Roman", "Arial",
                     "Arial Black", "Courier New", "Courier", "Georgia",
                     "Impact", "Comic Sans MS", "Lucida Console" ];

      var entry;
      for (var i=0, j=entries.length;i<j;i++)
      {
        entry = new qx.ui.form.ListItem(entries[i]);
        entry.set({ focusable : false,
                    keepFocus : true,
                    font: qx.bom.Font.fromString("12px " + entries[i]) });
        button.add(entry);
      }

      button.addListener("changeSelection", function(e)
      {
        var value = e.getData()[0].getLabel();
        if (value != "") {
          this.setFontFamily(value);
          // button.setSelection([ button.getChildren()[0] ]);
        }
      }, this.editor);

      return button;
    },


    /**
     * Creates the "font-size" toolbar dropdown
     *
     * @return {qx.ui.form.SelectBox} select box button
     */
    __fontSizeToolbarEntry : function()
    {
      var button = new qx.ui.form.SelectBox;
      button.set({ toolTipText: "Change Font Size",
                   focusable: false,
                   keepFocus: true,
                   width: 50,
                   height: 16,
                   margin: [ 4, 0 ] });
      button.add(new qx.ui.form.ListItem(""));

      var entry;
      for (var i=1;i<=7;i++)
      {
        entry = new qx.ui.form.ListItem(i+"");
        entry.set({ focusable : false,
                    keepFocus : true });
        button.add(entry);
      }

      button.addListener("changeSelection", function(e)
      {
        var value = e.getData()[0].getLabel();
        if (value != "") {
          this.setFontSize(value);
          // button.setSelection([ button.getChildren()[0] ]);
        }
      }, this.editor);

      return button;
    },


    /**
     * Toolbar entries
     *
     * @return {Array} toolbar entries
     */
    __getToolbarEntries : function()
    {
      return [
        {
          bold:                { text: "Format Bold", image: "qx/icon/Oxygen/16/actions/format-text-bold.png", action: this.editor.setBold },
          italic:              { text: "Format Italic", image: "qx/icon/Oxygen/16/actions/format-text-italic.png", action: this.editor.setItalic },
          underline:           { text: "Format Underline", image: "qx/icon/Oxygen/16/actions/format-text-underline.png", action: this.editor.setUnderline },
          strikethrough:       { text: "Format Strikethrough", image: "qx/icon/Oxygen/16/actions/format-text-strikethrough.png", action: this.editor.setStrikeThrough },
          removeFormat:        { text: "Remove Format", image: "qx/icon/Oxygen/16/actions/edit-clear.png", action: this.editor.removeFormat }
        },

        {
          alignLeft:           { text: "Align Left", image: "qx/icon/Oxygen/16/actions/format-justify-left.png", action: this.editor.setJustifyLeft },
          alignCenter:         { text: "Align Center", image: "qx/icon/Oxygen/16/actions/format-justify-center.png", action: this.editor.setJustifyCenter },
          alignRight:          { text: "Align Right", image: "qx/icon/Oxygen/16/actions/format-justify-right.png", action: this.editor.setJustifyRight },
          alignJustify:        { text: "Align Justify", image: "qx/icon/Oxygen/16/actions/format-justify-fill.png", action: this.editor.setJustifyFull }
        },

        {
          fontFamily:          { custom: this.__fontFamilyToolbarEntry },
          fontSize:            { custom: this.__fontSizeToolbarEntry },
          fontColor:           { text: "Set Text Color", image:  "aristo.demo/editor/format-text-color.png", action: this.__fontColorHandler },
          textBackgroundColor: { text: "Set Text Background Color", image:  "aristo.demo/editor/format-fill-color.png", action: this.__textBackgroundColorHandler }
        },

        {
          indent:              { text: "Indent More", image: "qx/icon/Oxygen/16/actions/format-indent-more.png", action: this.editor.insertIndent },
          outdent:             { text: "Indent Less", image: "qx/icon/Oxygen/16/actions/format-indent-less.png", action: this.editor.insertOutdent }
        },


        {
          insertImage:         { text: "Insert Image", image: "qx/icon/Oxygen/16/actions/insert-image.png", action: this.__insertImageHandler },
          insertTable:         { text: "Insert Table", image: "aristo.demo/editor/insert-table.png", action: this.__insertTableHandler },
          insertLink:          { text: "Insert Link", image: "qx/icon/Oxygen/16/actions/insert-link.png", action: this.__insertLinkHandler },
          insertHTML:          { text: "Insert HTML Code", image: "aristo.demo/editor/insert-text.png", action: this.__insertHTMLHandler },
          insertHR:            { text: "Insert Horizontal Ruler", image: "aristo.demo/editor/insert-horizontal-rule.png", action: this.editor.insertHorizontalRuler }
        },

        {
          ol:                  { text: "Insert Ordered List", image: "aristo.demo/editor/format-list-ordered.png", action: this.editor.insertOrderedList },
          ul:                  { text: "Inserted Unordered List", image: "aristo.demo/editor/format-list-unordered.png", action: this.editor.insertUnorderedList }
        },

        {
          undo:                { text: "Undo Last Change", image: "qx/icon/Oxygen/16/actions/edit-undo.png", action: this.editor.undo },
          redo:                { text: "Redo Last Undo Step", image: "qx/icon/Oxygen/16/actions/edit-redo.png", action: this.editor.redo }
        }
      ];
    },

  getToolBar : function()
    {
    var toolbar = new qx.ui.toolbar.ToolBar;

      // Put together toolbar entries
      var button;
      var toolbarEntries = this.getToolbarEntries();
      for (var i=0, j=toolbarEntries.length; i<j; i++)
      {
        var part = new qx.ui.toolbar.Part;
        toolbar.add(part);

        for (var entry in toolbarEntries[i])
        {
          var infos = toolbarEntries[i][entry];

          if(infos.custom) {
            button = infos.custom.call(this);
          }
          else
          {
            button = new qx.ui.toolbar.Button(null, infos.image);
            button.set({ focusable : false,
                         keepFocus : true,
                         center : true,
                         toolTipText : infos.text ? infos.text : "" });
            button.addListener("execute", infos.action, this.editor);
          }
          part.add(button);
        }
      }
    return toolbar;
  }
  }
});