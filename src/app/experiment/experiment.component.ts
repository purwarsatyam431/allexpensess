import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// colorss='gray';
// likecolor='#6A7C92'
// defaultcolor='red'
// status: boolean = false;
// clickEvent(){
//     this.item.canvasKey.optionSelectedforlike = !this.item.canvasKey.optionSelectedforlike;       
// }
// clickEvent2(){
//   this.item.canvasKey.optionSelectedfordislike = !this.item.canvasKey.optionSelectedfordislike;       
// }
public isLikeFontBold: boolean = true;
public isdisLikeFontBold: boolean = false;

item=   {
  fieldName: "Like & Dislike",
  imgSrc: "../../../assets/images/courses/biselection-input.png",
  label: "Label",
  font_family: "Poppins",
  font_size: null,
  labelColor: "rgba(32, 36, 33)",
  bold: false,
  italic: false,
  underline: false,
  labelHidden: false,
  controlId: null,
  infoDesc: "",
  infoColor: null,
  infoSize: 'Small',
  height: 25,
  width: 50,
  selectBgClr: "#6A7C92",
  unselectBgClr: '#FF0000',
  canvasKey: { optionSelectedforlike: false ,optionSelectedfordislike: false},
  // value: false,
  // color: {
  //   checked: "#56C128",
  //   unchecked: "#FF0000"
  // },
  // switchColor: {
  //   checked: "white",
  //   unchecked: "white"
  // },
  designProperties: [{
    fieldName: "Name",
    label: "Name",
    inputType: "text",
    placeholder: "",
    disabled: true,
    value: "Like & Dislike",
  },
  {
    fieldName: "Control Label",
    label: "Control Label",
    inputType: "text",
    placeholder: "",
    value: null
  },
  {
    fieldName: "Fonts",
    label: "Fonts",
    placeholder: "",
    fontFamilyList: [
      'times new roman',
      'arial',
      'poppins',
      'comic sans ms',
      'roboto',
      'open sans'
    ],
    value: null
  },
  {
    fieldName: "Size",
    label: "Size",
    inputType: "number",
    placeholder: "",
    value: null
  },
  {
    fieldName: "Colors",
    label: "Colours",
    value: null
  },
  {
    fieldName: "Font Type",
    fontBold: false,
    fontItalic: false,
    fontUnderline: false
  },
  {
    fieldName: "Label Hide",
    label: 'Hide',
    valueFlag: false
  },
  {
    fieldName: "Control Id",
    label: "Control Id",
    inputType: "text",
    placeholder: "",
    disabled: true,
    value: null
  },
  {
    fieldName: "Info",
    label: 'Info',
    placeholder: "Enter your info desc here",
    value: null
  },
  {
    fieldName: "Info Color",
    label: "Icon Color",
    value: null
  },
  {
    fieldName: "Info Size",
    label: "Size",
    placeholder: "",
    iconSizeList: [
      'Small',
      'Medium',
      'Large'
    ],
    value: null
  },
  {
    fieldName: "Info Hide",
    label: 'Hide',
    valueFlag: false
  },
  {
    fieldName: "Upload Icon",
    label: 'Preset Icon',
    inputType: "button",
    fileName: "",
  },
  {
    fieldName: "Like Color",
    label: "Colours",
    value: null
  },
  {
    fieldName: "Default Color",
    label: "Colours",
    value: null
  },
  {
    fieldName: "Dislike Color",
    label: "Colours",
    value: null
  },
  {
    fieldName: "Default Dislike Color",
    label: "Colours",
    value: null
  },

  {
    fieldName: "Required",
    label: "Required",
    valueFlag: false
  },
  {
    fieldName: "Total Hide",
    label: "Hide",
    valueFlag: false
  },
  {
    fieldName: "Read only",
    label: "Read only",
    valueFlag: false
  }],
 
}
}
