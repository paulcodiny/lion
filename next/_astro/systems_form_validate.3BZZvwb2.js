const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/define.DYUong5B.js","_astro/node-tools_providence-analytics_overview.LFFQBZzG.js","_astro/lit-element.qDHKJJma.js","_astro/lit-html.C7L4dwLU.js","_astro/unsafe-html.J0GGe2Q7.js","_astro/directive.CGE4aKEl.js","_astro/define.m2CvvXyF.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper.nLWefGx3.js";import"./node-tools_providence-analytics_overview.LFFQBZzG.js";import"./lit-element.qDHKJJma.js";import{x as i}from"./lit-html.C7L4dwLU.js";import"./unsafe-html.J0GGe2Q7.js";import"./lion-checkbox.-8s1JYtk.js";import"./lion-combobox._tBJxoFJ.js";import"./lion-fieldset.D3IPJNOg.js";import"./lion-form.hPx7a0Ob.js";import"./lion-input-amount.DDDvZiv0.js";import"./lion-input-date.Dd-w_WPj.js";import"./lion-input-datepicker.KIZKKTBy.js";import"./lion-input-email.CiLat5Ia.js";import"./lion-input-iban.CxL2qLmB.js";import"./lion-input-range.qHWQcuJf.js";import"./lion-input-stepper.DN5ovpJ5.js";import"./lion-input.By0swi2M.js";import"./lion-listbox.CTU7NZNy.js";import"./lion-option.CJQHPQZS.js";import{b as N}from"./LionOption.BBDF9KmV.js";import"./lion-radio.W2GOTGyE.js";import"./lion-select.C9bGI4xm.js";import"./lion-select-rich.Bx8FhDdQ.js";import"./lion-textarea.BrDnhAaW.js";import{l as c}from"./singleton._qiOfd78.js";import{l as D,D as F}from"./loadDefaultFeedbackMessages.BPteM1aE.js";import{R as s}from"./Required.DgHIr_Cn.js";import{M as h,E as r,a as $,b as R,P as C,I as L,c as P}from"./StringValidators.UXrPEtgv.js";import{I as A,M as S,a as B,b as _}from"./NumberValidators.CmKpqCIb.js";import{c as q,M as v,a as T,b as G}from"./DateValidators.CEq8F9yx.js";import{L as U}from"./LionInput.BizilKRR.js";import{r as w}from"./renderLitAsNode.DRxcIGFy.js";import{V as d}from"./Validator.DAOhFpDH.js";import{U as x}from"./InteractionStateMixin.C2Xjq1f8.js";import"./directive.CGE4aKEl.js";import"./ChoiceGroupMixin.D4jczhm9.js";import"./FormRegistrarMixin.DBLbGJl3.js";import"./dedupeMixin.6XPTJgK8.js";import"./FormGroupMixin.Ccw5I-Vk.js";import"./DisabledMixin.Bm1nsErI.js";import"./ChoiceInputMixin.CLlllJmN.js";import"./LionCombobox.DXYgCoPB.js";import"./OverlayMixin.Clz3oycz.js";import"./index.BNCfcFQh.js";import"./lazifyInstantiation.CgYLRMC3.js";import"./withDropdownConfig.eRP55go6.js";import"./withClickInteraction.B1DPetIk.js";import"./validators.Dx-g-RY2.js";import"./LocalizeMixin.VYu75dkK.js";import"./directive-helpers.CLllgGgm.js";import"./async-directive.CHVe8p0E.js";import"./getLocalizeManager.W5d_ICRU.js";import"./LionFieldset.CL5e8Y_z.js";import"./LionInputAmount.DL_OZTwY.js";import"./formatNumber.aN4wfHaw.js";import"./getLocale.PZ4ia-vo.js";import"./parseNumber.Cin8KryK.js";import"./LionInputDate.DkmNkEpB.js";import"./formatDate.D_ccCp8N.js";import"./normalizeIntlDate.jFpsyBMC.js";import"./if-defined.CV50pAZo.js";import"./ArrowMixin.1rQ7LGkW.js";import"./withBottomSheetConfig.Cflq9zAr.js";import"./withModalDialogConfig.CPyLhuB7.js";import"./LionCalendar.CzG2mKfg.js";import"./normalizeDateTime.BoDqBOW2.js";import"./ScopedStylesController.JZrBxnCH.js";import"./LionField.ChTPU14b.js";import"./LionButton.B9nVXwmc.js";import"./DisabledWithTabIndexMixin.DiSGvuwH.js";import"./NativeTextFieldMixin.ChJsDAsi.js";import"./PhoneUtilManager.DeOgNdAt.js";customElements.define("lion-options",N);const j=()=>(D(),i`
    <lion-input
      name="value"
      label="Default validation"
      .fieldName="${"value"}"
      .validators="${[new s,new h(4)]}"
      .modelValue="${"foo"}"
    ></lion-input>
    <button @click="${()=>c.locale="de-DE"}">DE</button>
    <button @click="${()=>c.locale="en-GB"}">EN</button>
    <button @click="${()=>c.locale="fr-FR"}">FR</button>
    <button @click="${()=>c.locale="nl-NL"}">NL</button>
    <button @click="${()=>c.locale="zh-CN"}">CN</button>
  `),O=()=>i`
  <lion-input .validators="${[new s]}" label="Required" .fieldName="value"></lion-input>
`,H=()=>i`
  <lion-input
    .validators="${[new r(7)]}"
    .modelValue="${"not exactly"}"
    label="EqualsLength"
  ></lion-input>
  <lion-input
    .validators="${[new h(10)]}"
    .modelValue="${"too short"}"
    label="MinLength"
  ></lion-input>
  <lion-input
    .validators="${[new $(7)]}"
    .modelValue="${"too long"}"
    label="MaxLength"
  ></lion-input>
  <lion-input
    .validators="${[new R({min:10,max:20})]}"
    .modelValue="${"that should be enough"}"
    label="MinMaxLength"
  ></lion-input>
  <lion-input
    .validators="${[new C(/#LionRocks/)]}"
    .modelValue="${'regex checks if "#Lion<NO SPACE>Rocks" is in this input #LionRocks'}"
    label="Pattern"
  ></lion-input>
`,W=()=>i`
  <lion-input-amount
    .validators="${[new A]}"
    .modelValue="${"foo"}"
    label="IsNumber"
  ></lion-input-amount>
  <lion-input-amount
    .validators="${[new S(7)]}"
    .modelValue="${5}"
    label="MinNumber"
  ></lion-input-amount>
  <lion-input-amount
    .validators="${[new B(7)]}"
    .modelValue="${9}"
    label="MaxNumber"
  ></lion-input-amount>
  <lion-input-amount
    .validators="${[new _({min:10,max:20})]}"
    .modelValue="${5}"
    label="MinMaxNumber"
  ></lion-input-amount>
`,Y=()=>{const e=new Date,t=e.getFullYear(),o=e.getMonth(),a=e.getDate(),n=new Date(t,o,a-1),u=new Date(t,o,a+1);return i`
    <lion-input-date
      .validators="${[new q]}"
      .modelValue="${"foo"}"
      label="IsDate"
    ></lion-input-date>
    <lion-input-date
      .validators="${[new v(e)]}"
      .modelValue="${new Date(n)}"
      label="MinDate"
    ></lion-input-date>
    <lion-input-date
      .validators="${[new T(e)]}"
      .modelValue="${new Date(u)}"
      label="MaxDate"
    ></lion-input-date>
    <lion-input-date
      .validators="${[new G({min:new Date(n),max:new Date(u)})]}"
      .modelValue="${new Date(e)}"
      label="MinMaxDate"
    ></lion-input-date>
  `},z=()=>i`
  <lion-input-email
    .validators="${[new L]}"
    .modelValue="${"foo"}"
    label="IsEmail"
  ></lion-input-email>
`,J=()=>i`
  <lion-input
    .validators="${[new r(4,{getMessage:()=>"4 chars please..."})]}"
    .modelValue="${"123"}"
    label="Custom message for validator instance"
  ></lion-input>
  <lion-input
    .validators="${[new r(4,{getMessage:({modelValue:e,params:t})=>{const o=e.length-t;return`${Math.abs(o)} too ${o>0?"much":"few"}...`}})]}"
    .modelValue="${"way too much"}"
    label="Dynamic message for validator instance"
  ></lion-input>
`,K=()=>i`
  <lion-input
    .validators="${[new r(4,{getMessage:()=>i`<div><b>Note</b> 4 chars please...</div>`})]}"
    .modelValue="${"123"}"
    label="Custom message for validator instance"
  ></lion-input>
`,Z=()=>i`
  <lion-input
    .validators="${[new r(4,{fieldName:"custom fieldName"})]}"
    .modelValue="${"123"}"
    label="Custom fieldName for 1 validator"
  ></lion-input>
  <lion-input
    .validators="${[new s,new r(4)]}"
    .fieldName="${"custom fieldName"}"
    .modelValue="${"123"}"
    label="Custom fieldName for all validators"
  ></lion-input>
`,Q=()=>{const e=/^([A-Z]\.)+$/;class t extends d{static get validatorName(){return"IsExampleInitials"}execute(a){let n=!1;return(new P().execute(a)||!e.test(a))&&(n=!0),n}static getMessage({fieldName:a}){return`Please enter a valid ${a} in the format "L.I.".`}}return i`
    <lion-input
      label="Initials"
      name="initials"
      .validators="${[new t("mine")]}"
    ></lion-input>
  `},X=()=>{const e=t=>{const o=t.target.parentElement.querySelector("#scientists");o.submitted=!o.submitted};return i`
    <lion-checkbox-group
      id="scientists"
      name="scientists[]"
      label="Favorite scientists"
      .validators="${[new s]}"
    >
      <lion-checkbox label="Archimedes" .choiceValue="${"Archimedes"}"></lion-checkbox>
      <lion-checkbox label="Francis Bacon" .choiceValue="${"Francis Bacon"}"></lion-checkbox>
      <lion-checkbox label="Marie Curie" .choiceValue="${"Marie Curie"}"></lion-checkbox>
    </lion-checkbox-group>
    <button @click="${t=>e(t)}">Validate</button>
  `},ee=()=>{class e extends d{execute(a){return a.length<2}static get validatorName(){return"HasMinTwoChecked"}static async getMessage(){return"You need to select at least 2 values."}}const t=o=>{const a=o.target.parentElement.querySelector("#scientists2");a.submitted=!a.submitted};return i`
    <lion-checkbox-group
      id="scientists2"
      name="scientists2[]"
      label="Favorite scientists"
      help-text="You should have at least 2 of those"
      .validators="${[new s,new e]}"
    >
      <lion-checkbox label="Archimedes" .choiceValue="${"Archimedes"}"></lion-checkbox>
      <lion-checkbox label="Francis Bacon" .choiceValue="${"Francis Bacon"}"></lion-checkbox>
      <lion-checkbox label="Marie Curie" .choiceValue="${"Marie Curie"}"></lion-checkbox>
    </lion-checkbox-group>
    <button @click="${o=>t(o)}">Validate</button>
  `},te=()=>{const e=t=>{const o=t.target.parentElement.querySelector("#dinos1");o.submitted=!o.submitted};return i`
    <lion-radio-group
      id="dinos1"
      name="dinos1"
      label="Favourite dinosaur"
      .validators="${[new s]}"
    >
      <lion-radio label="allosaurus" .choiceValue="${"allosaurus"}"></lion-radio>
      <lion-radio label="brontosaurus" .choiceValue="${"brontosaurus"}"></lion-radio>
      <lion-radio label="diplodocus" .choiceValue="${"diplodocus"}"></lion-radio>
    </lion-radio-group>
    <button @click="${t=>e(t)}">Validate</button>
  `},oe=()=>{class e extends d{static get validatorName(){return"IsBrontosaurus"}execute(a){let n=!1;return a!=="brontosaurus"&&(n=!0),n}static async getMessage(){return'You need to select "brontosaurus"'}}const t=o=>{const a=o.target.parentElement.querySelector("#dinos2");a.submitted=!a.submitted};return i`
    <lion-radio-group
      id="dinos2"
      name="dinos2"
      label="Favourite dinosaur"
      .validators="${[new s,new e]}"
    >
      <lion-radio label="allosaurus" .choiceValue="${"allosaurus"}"></lion-radio>
      <lion-radio label="brontosaurus" .choiceValue="${"brontosaurus"}"></lion-radio>
      <lion-radio label="diplodocus" .choiceValue="${"diplodocus"}"></lion-radio>
    </lion-radio-group>
    <button @click="${o=>t(o)}">Validate</button>
  `},ae=()=>i`
  <lion-combobox .validators="${[new s]}" name="favoriteMovie" label="Favorite movie">
    <lion-option checked .choiceValue="${"Rocky"}">Rocky</lion-option>
    <lion-option .choiceValue="${"Rocky II"}">Rocky II</lion-option>
    <lion-option .choiceValue="${"Rocky III"}">Rocky III</lion-option>
    <lion-option .choiceValue="${"Rocky IV"}">Rocky IV</lion-option>
    <lion-option .choiceValue="${"Rocky V"}">Rocky V</lion-option>
    <lion-option .choiceValue="${"Rocky Balboa"}">Rocky Balboa</lion-option>
  </lion-combobox>
`,ie=()=>{try{class e extends U{static get validationTypes(){return["error","warning","info","success"]}}customElements.define("my-types-input",e)}catch{}return i`
    <style>
      .demo-types-input {
        padding: 0.5rem;
      }
      .demo-types-input[shows-feedback-for~='success'] {
        background-color: #e4ffe4;
        border: 1px solid green;
      }
      .demo-types-input[shows-feedback-for~='error'] {
        background-color: #ffd4d4;
        border: 1px solid red;
      }
      .demo-types-input[shows-feedback-for~='warning'] {
        background-color: #ffe4d4;
        border: 1px solid orange;
      }
      .demo-types-input[shows-feedback-for~='info'] {
        background-color: #d4e4ff;
        border: 1px solid blue;
      }
    </style>
    <my-types-input
      .validators="${[new s,new h(7,{type:"warning"}),new $(10,{type:"info",getMessage:()=>"Please, keep the length below the 10 characters."}),new F]}"
      .modelValue="${"exactly"}"
      label="Validation Types"
      class="demo-types-input"
    ></my-types-input>
  `},ne=()=>{function e(o=0){return new Promise(a=>{setTimeout(()=>{a()},o)})}class t extends d{constructor(...a){super(...a)}static get validatorName(){return"asyncValidator"}static get async(){return!0}async execute(){return console.log("async pending..."),await e(2e3),console.log("async done..."),!0}static getMessage({modelValue:a}){return`validated for modelValue: ${a}...`}}return i`
    <style>
      lion-input[is-pending] {
        opacity: 0.5;
      }
    </style>
    <lion-input
      label="Async validation"
      .validators="${[new t]}"
      .modelValue="${"123"}"
    ></lion-input>
  `},le=()=>{const e=new Date("09/09/1990"),t=new v(e,{message:"Fill in a date after your birth date"});return i`
    <lion-input-date
      label="Birth date"
      help-text="Adjust this date to retrigger validation of the input below..."
      .modelValue="${e}"
      @model-value-changed="${({target:{modelValue:o,errorState:a}})=>{a||(t.param=o)}}"
    ></lion-input-date>
    <lion-input-date
      label="Graduation date"
      .modelValue="${new Date("09/09/1989")}"
      .validators="${[t]}"
    ></lion-input-date>
  `},se=()=>i`
  <lion-input
    disabled
    .validators="${[new r(7)]}"
    .modelValue="${"not exactly"}"
    label="EqualsLength"
  ></lion-input>
`,re=()=>{function e(m=0,l=!1){return new Promise(p=>{setTimeout(()=>{p(new Response(JSON.stringify({message:l?"Username is already taken":""}),{status:l?400:200}))},m)})}let t,o="Unknown Error",a=!1;const n=m=>{const l=m.target;if(l.hasFeedbackFor.includes("error")){l.formElements.find(E=>E.hasFeedbackFor.includes("error")).focus();return}a=!0,l.formElements.username.validate();const p=l.serializedValue;e(2e3,p.simulateError.length).then(async b=>{b.status!==200&&(o=(await b.json())?.message,t(!0)),t(!1),a=!1})};class u extends d{static get validatorName(){return"backendValidator"}static get async(){return!0}async execute(){return a?await new Promise(l=>t=l):!1}static getMessage({fieldName:l,modelValue:p,params:b}){return o}}return i`
    <style>
      lion-input[is-pending] {
        opacity: 0.5;
      }
    </style>
    <lion-form @submit="${n}">
      <form>
        <lion-input
          label="username"
          name="username"
          .validators="${[new u(""),new s]}"
          .modelValue="${""}"
        ></lion-input>
        <lion-checkbox-group name="simulateError">
          <lion-checkbox label="Check to simulate a backend error"></lion-checkbox>
        </lion-checkbox-group>
        <lion-button-submit>Submit</lion-button-submit>
      </form>
    </lion-form>
  `},k=e=>e&&!(e instanceof x);class de extends d{static get validatorName(){return"Interval"}execute({startDate:t,endDate:o}){return k(t)&&k(o)?!(t<o):!1}static async getMessage(){return"The start date should be before the end date"}}const ue=()=>i`
  <lion-fieldset .validators="${[new de]}">
    <lion-input-date name="startDate" label="Start date"></lion-input-date>
    <lion-input-date name="endDate" label="End date"></lion-input-date>
  </lion-fieldset>
`,V=e=>e&&!(e instanceof x);class M extends d{static get validatorName(){return"PasswordsMatch"}execute(t,{first:o,second:a}){return V(o.modelValue)&&V(a.modelValue)?o.modelValue!==a.modelValue:!1}}const y=w(i`
  <lion-input
    .feedbackCondition="${(e,t)=>t.focused}"
    type="password"
    name="initialPassword"
    label="New password"
  ></lion-input>
`),f=w(i`
  <lion-input
    .feedbackCondition="${(e,t)=>t.focused}"
    type="password"
    name="confirmPassword"
    label="Confirm password"
  ></lion-input>
`);y.validators=[new M({first:y,second:f},{getMessage:()=>"Please match with confirmation field"})];f.validators=[new M({first:y,second:f},{getMessage:()=>"Please match with initial field"})];const ce=()=>i` ${y}${f} `,me=document,pe=[{key:"defaultValidationMessages",story:j},{key:"requiredValidator",story:O},{key:"stringValidators",story:H},{key:"numberValidators",story:W},{key:"dateValidators",story:Y},{key:"emailValidator",story:z},{key:"defaultMessages",story:J},{key:"defaultMessagesWithCustomHtml",story:K},{key:"overrideFieldName",story:Z},{key:"customValidators",story:Q},{key:"checkboxValidation",story:X},{key:"checkboxValidationAdvanced",story:ee},{key:"radioValidation",story:te},{key:"radioValidationAdvanced",story:oe},{key:"validationCombobox",story:ae},{key:"validationTypes",story:ie},{key:"asynchronousValidation",story:ne},{key:"dynamicParameterChange",story:le},{key:"disabledInputsValidation",story:se},{key:"backendValidation",story:re},{key:"fieldsetValidation",story:ue},{key:"contextValidation",story:ce}];let I=!1;for(const e of pe){const t=me.querySelector(`[mdjs-story-name="${e.key}"]`);t&&(t.story=e.story,t.key=e.key,I=!0,Object.assign(t,{simulatorUrl:"/lion/next/simulator/",languages:[{key:"de-DE",name:"German"},{key:"en-GB",name:"English (United Kingdom)"},{key:"en-US",name:"English (United States)"},{key:"nl-NL",name:"Dutch"}]}))}I&&(customElements.get("mdjs-preview")||g(()=>import("./define.DYUong5B.js"),__vite__mapDeps([0,1,2,3,4,5])),customElements.get("mdjs-story")||g(()=>import("./define.m2CvvXyF.js"),__vite__mapDeps([6,2,3])));export{ne as asynchronousValidation,re as backendValidation,X as checkboxValidation,ee as checkboxValidationAdvanced,ce as contextValidation,Q as customValidators,Y as dateValidators,J as defaultMessages,K as defaultMessagesWithCustomHtml,j as defaultValidationMessages,se as disabledInputsValidation,le as dynamicParameterChange,z as emailValidator,ue as fieldsetValidation,W as numberValidators,Z as overrideFieldName,te as radioValidation,oe as radioValidationAdvanced,O as requiredValidator,H as stringValidators,ae as validationCombobox,ie as validationTypes};
