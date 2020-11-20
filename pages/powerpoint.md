---
title: PowerPoint
permalink: "/training/creating-accessible-content/powerpoint/index.html"
tags: training
eleventyNavigation:
  key: PowerPoint
  parent: Creating Accessible Content
  order: 3

---
## Principles

* Ensure **_font size is sufficient._** If your presentation will be viewed on a projector, font size may need to be even larger.
* Provide **_sufficient contrast._** If your presentation will be viewed on a projector, sometimes the contrast needs to be even more pronounced.
* Do not use color as **_the only way_** to convey meaning.
* Avoid **_automatic slide transitions._**
* Use **_simple slide transitions_** when possible.
* Do not put accessibility information like alternative text in the _Notes_ pane.
* If you have embedded video, ensure it is **_captioned._**
* If you have embedded audio, **_include a transcript._**
* If your slides contain animations, ensure they are **_brief and do not distract_** from the most important content on the page.
* Use **_simple_** language.

## Slide Layouts

Use slide layouts provided within PowerPoint to ensure files have **_correctly structured headings and lists_**, and **_proper reading order._**

1. Select _Home > New Slide_, then choose a layout from the dropdown.
2. To change a slide layout, select _Home > Layout_, then choose a layout from the dropdown.  
   ![Screenshot of the New Slide menu options on the default PowerPoint toolbar](/static/img/ppt-slide-layout.png)

## Reading Order

If you _Insert_ other content (e.g, a text box) it will be read by a screen reader in the order it is added to the page. It is important to keep this in mind whenever anything is added to a slide, since the visual reading order will not match the order read by assistive technologies until it is adjusted manually.

To check or fix reading order, select _Home > Arrange > Selection Pane_. Reading order is shown in reverse, **_bottom to top._** Click and drag or use the arrow buttons to change reading order.

![screenshot of the Selection Pane showing reading order of five items ](/static/img/ppt-reading-order.png)

## Alternative Text

Images should be given **_appropriate_** [**_alternative text_** (external link)](https://webaim.org/techniques/alttext) in PowerPoint. This Alt text is read by a screen reader in a PowerPoint file and should remain intact when exporting to HTML or a tagged PDF.

1. Right-click on the image and choose _Format Picture_.
2. Select the _Size & Properties_ icon and choose _Alt Text_.
3. Enter appropriate Alt text only in the _Description_ field (not the _Title_ field).

Alternatively, double-click on the image and the Alt Text option will appear in the Picture Format toolbar at the top of the application.

![screenshot of Alt text tab](/static/img/ppt-alt-text.png)

## Data Tables

Accessible tables need a **_clear table structure_** and **_table headers_** to help guide a screen reader user.

1. Select the _Insert_ tab on the ribbon, then select _Table > Insert Table_.  
   ![screenshot of selecting Table on the Insert ribbon](/static/img/ppt-insert-table.png)
   1. **_Keep tables simple._** Complex tables - such as those with cells spanning multiple columns or rows or with headers for both columns and rows - should not be created in PowerPoint.
2. Position the cursor anywhere in a table.
3. Select the **Design** tab.
4. In the **Table Style Options**, select the **Header Row** check box.
5. In the table, type the column headings.  
   ![Screenshot of the Header Row check box in the Table Style Options group on the Table Tools Design tab](/static/img/ppt-table-headers.png)

## Hyperlinks

PowerPoint **_automatically creates a hyperlink_** when a user pastes a full URL onto a slide and presses _Enter_ or _Space_. These may not make sense to screen reader users or others, so make the link text descriptive.

1. Select a hyperlink, right click, and select _Edit Hyperlink_ or hit _Ctrl/Cmd + k_.
2. Change the text in the _Text to Display_ field to a more meaningful description.

![Screenshot of the Edit Hyperlink menu, highlighting the Text to Display field.](/static/img/ppt-hyperlinks.png)

## Accessibility Checker

Most Microsoft Office products have an Accessibility Checker. It is always a good idea to use it throughout the process of creating a document, and of course at the end of the process before uploading it to the learning management system.

On a Mac, select the Review tab in the toolbar and you will see the Check Accessibility option.

![Screenshot of Review tab with Check Accessibility option highlighted using PowerPoint on a Mac.](/static/img/ppt-accessibility-checker-mac.png)

On a PC, follow these instructions:

1. Select _File > Info_.
2. Select the _Check for Issues_ button and choose _Check Accessibility_.
3. The _Accessibility Checker_ task pane will show accessibility errors, warnings, and tips on how to repair the errors.

![screenshot of selecting Check Accessibility](/static/img/ppt-accessibility-checker-pc.png)

Select specific issues to see _Additional Information_ at the bottom of the pane.

## Sources and Further Reading

* [Creating Accessible Microsoft PowerPoint 2016 Presentations (Windows) (external link)](http://ncdae.org/resources/cheatsheets/powerpoint2016.php) from National Center on Disability and Access to Education
* [Creating Accessible Microsoft PowerPoint 2016 Presentations (Mac) (external link)](http://ncdae.org/resources/cheatsheets/powerpoint2016-mac.php) from National Center on Disability and Access to Education
* [Make your PowerPoint presentations accessible to people with disabilities (external link)](https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25#PickTab=Windows) from Microsoft
* [PowerPoint Accessibility (external link)](https://webaim.org/techniques/powerpoint/) from WebAIM
* [Microsoft PowerPoint Accessibility Quick Reference (PDF)](https://www.at3center.net/Content/EOCONTENTMEDIACENTER/documents/ICT/2018-AT3_QuickRef_PwrPT%201.pdf) from AT3 Center