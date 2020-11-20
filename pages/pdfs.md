---
title: PDFs
permalink: "/training/creating-accessible-content/pdfs/index.html"
tags: training
eleventyNavigation:
  key: PDFs
  parent: Creating Accessible Content
  order: 2

---
## Converting a Source Document to PDF

The best way to make an accessible PDF is to start with an accessible source document and [convert that document to a tagged PDF (external link)](https://webaim.org/techniques/acrobat/converting#word). Making a document accessible using Acrobat is a more difficult and unreliable method.

**Note:** Though a PDF can be made more accessible using the tools provided by Adobe Acrobat, the process itself is not accessible. Adobe needs to put more focus on this.

## Making a PDF Accessible Using Adobe Acrobat

### Run "Make Accessible" wizard

Starting the process by running the Action Wizard "Make Accessible" option is helpful, since it will walk you through some important steps in the process and alert you on whether or not the PDF currently has tags.

To begin, select **_Tools_** from the upper right corner, then select **_Action Wizard > Make Accessible_** from the sidebar. Select **_Start_** button.

![Screenshot of the Make Accessible button located in the Action Wizard sidebar](/static/img/pdf-make-accessible.png)

1. **_Add Document Description —_** Enter a descriptive page **_Title._** Other fields are optional.
2. **_Set Open Options —_** Runs automatically
3. **_Recognize Text using OCR —_** If your PDF is not **_true text,_** it will be converted into true text during this step. If you are not sure if your PDF is true text, one easy test is to **_search for a word_** that you know occurs in the document. If no results are found, it needs to be **_converted_** to text.
4. **_Detect Form Fields —_** Only necessary if your page contains **_fillable forms._**
5. **_Set Tab Order Property —_** Runs automatically
6. **_Set Reading Language_**
7. **_Add Tags to Document —_** PDF “tags” provide accessibility information to **_screen readers._** If your document **_does not have tags_** they will be added during this step. You will need to check the quality of these tags later on.
8. **_Set Alternate Text —_** A window will appear that allows you to **_add alternative text._** Use the arrows to move between images and check **_Decorative figure_** if the image should be **_ignored_** by a screen reader.  
   ![Screenshot of the Set Alternative Text panel](/static/img/pdf-insert-alt-text.png)
9. **_Run Accessibility Full Check —_** This checker will show additional issues. Right click errors and warnings and select **_Fix_** to address the issues, **_Skip Rule_** if the issue has been addressed, and **_Explain_** to read online help.

### Add or Change Tags

Just like valid HTML markup on a webpage, accurate tags in a PDF are vital to making sure it's accessible to screen readers and other assistive technologies. Without tags, a screen reader might not be able to detect any text in the document, and if it does, it will often be very confusing and difficult for the user to understand.

The **_Reading Order_** tool allows a user to quickly **_add and edit PDF tags_** and **_view the reading order_** of elements on the page. To edit tags, do the following.

1. From the right-hand menu, select _Tools._
2. Then select **_Accessibility > Reading Order._** If the Accessibility option is not listed, use the **_Options_** button to check **_Accessibility_** on the menu.
3. When selected, the view on the screen changes. All of the content is enclosed in numbered boxes. Each of these boxes represents a tag and the number corresponds with the reading order in the **_Order panel.  
   ![Screenshot of the reading order window in Adobe Acrobat](/static/img/pdf-reading-order-window.png)_**
4. Select the **_Structure Types_** radio button. The page will now display tag types instead of reading order.
5. Within the **_Reading Order_** window you will notice a group of buttons with the names of several common tags. You can use these buttons to assign tags to selected text or objects. Use the **_Text_** button for body text and the **_Heading 1-6_** buttons to assign correct heading levels.

#### Check if a tag exists

Sometimes, you'll find that an element is visually present on the page but that a tag for that element does not exist. To check for a tag's existence:

1. Highlight the text in the document that you suspect might not have a related tag
2. Choose the **_Tags_** tool in the left sidebar
3. Click the the **Options** button in the top left corner - the icon looks like a checklist with two options with a small upside down triangle next to it
4. Choose the **"Find Tag from Selection"** option  
   ![Screenshot of text highlighted in PDF with the Tags tool selected and Find Tag from Selection option highlighted](/static/img/pdf-find-tag.png)
5. If a popup appears with the content **"The selection was not found."**, a tag will need to be added for the highlighted content

#### Adding a New Tag

1. In the **_Tags_** tool on the left side of the screen, right-click on the tag above where you want the new one to appear
2. Choose the **"New Tag..."** option and select the correct type of tag to be added, then click the **OK** button.
3. Highlight the content in the document that needs the new tag to be attached to it
4. Back in the **_Tags_** tool, right-click on the new tag created and select the **"Create Tag from Selection"** option  
   ![Screenshot of the Tags tool being used in Adobe Acrobat to create a new tag from a selection of text](/static/img/pdf-create-tag.png)

You can also add/edit the following tags in the **_Reading Order_** tool:

#### Images and Alternative Text

##### Decorative images

1. To tag a decorative image correctly, left-click on the white square with the number inside of it when a hand icon appears.  
   ![Screenshot of an image in Adobe Acrobat, highlighted in tag view](/static/img/pdf-figure-tag.png)
2. When the buttons in the **_Reading Order_** window become enabled, click the "Background/Artifact" button.  
   ![Reading Order window in Adobe Acrobat with the Background/Artifact button circled for emphasis](/static/img/pdf-reading-order-background-tag.png)

##### Descriptive images

1. Right-click on the white square with the number inside of it on the image you want to add alternative text to.
2. Choose the "Edit Alternate Text..." option in the resulting menu.  
   ![Edit alternate text option in a popup menu in Adobe Acrobat](/static/img/pdf-edit-alternate-text.png)

#### Table Headers

1. Select a table and then select **_Table Inspector._** Table header cells will be identified in red.
2. **_Select a table or cell_** by dragging a box through the cells (not around them or you might select additional cells). **_Right click_** on a selected cell(s) and choose **_Table Cell Properties._** A dialog box will appear.
3. If the selected cell(s) needs to be tagged as a header, select the **_Header Cell_** option and assign a scope of either **_Row_** or **_Column._**

#### View and Edit Reading Order

Reading order is one of the most important aspects of an accessible PDF. Assistive technology needs to be told in what order to read items on the page - it cannot determine the correct order based solely on the visual order of things. It makes the most sense to manually set the reading order based on how the content appears visually in the document.

1. Select the **_Order_** tool in the left sidebar - the icon shows a grid of four squares with a line flowing from one square to the next  
   ![Screenshot of left sidebar in Adobe Acrobat, with the Order tool icon highlighted by a red border for emphasis](/static/img/pdf-order-tool.png)
2. Click and drag items to move them before or after other elements on the page to make them reflect the correct (visual) reading order

## Sources and Further Reading

* [Creating Accessible PDF Documents in Adobe Acrobat XI (external link)](http://ncdae.org/resources/cheatsheets/acrobat-xi.php) from The National Center on Disability and Access to Education
* [UConn IT Accessibility PDFs page (external link)](https://accessibility.its.uconn.edu/pdfs/)
* [Add Alternate Text and Supplementary Information to Tags (external link)](https://www.adobe.com/accessibility/products/acrobat/pdf-repair-add-alternative-text.html)