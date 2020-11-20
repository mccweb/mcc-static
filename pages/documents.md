---
title: Documents
permalink: "/training/creating-accessible-content/documents/index.html"
tags:
- training
eleventyNavigation:
  key: Documents
  parent: Creating Accessible Content
  order: "1"

---
## Using the Check Accessibility tool

Use the Check Accessibility tool to determine accessibility issues with your document and follow the prompts to fix issues.  The Check Accessibility tool is located under File > Info > Check for Issues in Microsoft Word 2016 and under Review in Office 365.

## Eight ways to create a more accessible Microsoft Word Document.

### Add a Document Title

File Tab > Title field (at right of screen)

![Screenshot showing where document title is added in Microsoft Word 2013](/static/img/add-document-title-screenshot.jpg)

### Use Word Heading Styles

When adding headings to a Word document, do not use regular paragraph text styled to look like a heading. Doing this will not provide semantic meaning to a screen reader. Instead, use the actual heading styles provided by Word.

Home Tab > Styles Group > Select “Heading 1”, “Heading 2”, “Heading 3”, etc.

Each Heading Style should match the logical heading structure of the document.

![Heading level options located in the top toolbar in Microsoft Word 2013](/static/img/word-heading-levels.jpg)

If you would rather use a style different than the default ones provided by Word, follow these steps:

1. Write text and apply desired styling
2. Highlight text and right click on the desired heading level in the toolbar
3. Select the "Update Heading to Match Selection" option

![The options shown after right-clicking on a heading style in Microsoft Word, with Update Heading 1 to Match Selection highlighted](/static/img/update-heading-style.png)

From that point forward, whenever you write new text and apply that heading level to it, that style will automatically be used. The same steps can be followed for any heading level. Always make sure that the heading is using a standard, easily readable font and good color contrast with the background.

### Use Word List Structure

![Formatting options in Microsoft Word, with the options for different list structures circled to bring attention to them](/static/img/word-list-structure.jpg)

* Home Tab > Paragraph Group > Bullets (for bulleted list)
* Home Tab > Paragraph Group > Numbering (for basic numbered list)
* Home Tab > Paragraph Group > Multilevel list (for more complex numbered list)

### Add Alternative Text to Meaningful Images and Figures

Alternative Text conveys the intended meaning of an image or figure. If an image is purely for decoration, either consider removing it from the document or choosing "Mark as decorative" checkbox when editing its alt text.

![Title and Description field used in Microsoft Word for adding alternative text to an image](/static/img/word-alt-text.jpg)

* Ensure that all of your image alignments are set to In line with text
* Right click image and select "Edit Alt Text..." from menu
* Type alternative text into Description field

### Identify Column Headers in Table Row

Select top row of table > Right click/Shift + F10 > Table Properties > Row tab > select “Repeat as header row at the top of each page” checkbox.

![Table properties window in Microsoft Word where header rows are set](/static/img/word-column-headers.jpg)

### When Color Conveys Meaning, Use Color Plus Another Visual Cue

#### Use markers, text labels or different patterns for charts and graphs

_1: Line graph with no markers_

![Line graph with three lines, each only using color to differentiate them](/static/img/line-graph-no-markers.jpg)

_2: Line graph with markers_

![Line graph with three lines, each using a different color and symbol to differentiate them](/static/img/line-graph-with-markers.jpg)

#### Use additional formatting for text, or a symbol such as an asterisk

An example of text formatting is when an input field on a form is required. Instead of only making the text for the field's label red, include an asterisk (and explain what the asterisk means before you use it for the first time) or explicitly add the word "(required)".

### Use Good Color Contrast

Check that contrast between text and background colors is at least 4.5:1 for regular text and 3.0:1 for large text.

* The [Paciello Group Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) is an app lets you easily check color contrast
* The [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) is a great tool that works right in your browser

### Use Descriptive Link Text

Make descriptive link text the active link in a document, and put the actual web address (URL) in plain text. This makes sure that people can use the link whether the document is digital or printed.

In the Insert Hyperlink window, “Text to display” is the descriptive link text and “Address” is the actual web address.

![Insert Hyperlink window in Microsoft Word shows a new link being inserted with the text "Fill out our webinar evaluation here!" leading to a web address](/static/img/word-descriptive-link-text.jpg)

### Avoid hitting Enter or Return after a heading to create extra space

Hitting the Enter or Return key after a heading will give the visual appearance of a blank space but will be detected by assistive technologies as an empty heading element. This can be very confusing to assistive technology users. You should instead increase the spacing after the text.

1. Highlight text after which you want the space
2. Right-click on the highlighted text
3. Click "Paragraph" in the menu that appears
4. Increase the Spacing after the paragraph
5. Click the OK button

![demonstrating paragraph spacing using the paragraph dialog box](/static/img/word-space-after-paragraph.png)

### Sources and Further Reading

* [Microsoft Word Accessibility Quick Reference (PDF)](https://www.at3center.net/Content/EOCONTENTMEDIACENTER/documents/ICT/2018-AT3_QuickRef_Word.pdf) from AT3 Center
* [UConn IT Accessibility Documents page (external link)](https://accessibility.its.uconn.edu/documents/)