const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/define.DYUong5B.js","_astro/node-tools_providence-analytics_overview.LFFQBZzG.js","_astro/lit-element.qDHKJJma.js","_astro/lit-html.C7L4dwLU.js","_astro/unsafe-html.J0GGe2Q7.js","_astro/directive.CGE4aKEl.js","_astro/define.m2CvvXyF.js"])))=>i.map(i=>d[i]);
import{_ as t}from"./preload-helper.nLWefGx3.js";import"./node-tools_providence-analytics_overview.LFFQBZzG.js";import"./lit-element.qDHKJJma.js";import{x as n}from"./lit-html.C7L4dwLU.js";import"./unsafe-html.J0GGe2Q7.js";import"./lion-button.Cn-OiRgW.js";import"./lion-checkbox.-8s1JYtk.js";import"./lion-combobox._tBJxoFJ.js";import"./lion-option.CJQHPQZS.js";import"./lion-fieldset.D3IPJNOg.js";import"./lion-form.hPx7a0Ob.js";import"./lion-input-amount.DDDvZiv0.js";import"./lion-input-date.Dd-w_WPj.js";import"./lion-input-datepicker.KIZKKTBy.js";import"./lion-input-email.CiLat5Ia.js";import"./lion-input-file.CLm2tax-.js";import"./lion-input-tel.LOJwgeSg.js";import"./lion-input-tel-dropdown.DDk_5nj_.js";import"./lion-input-iban.CxL2qLmB.js";import"./lion-input-range.qHWQcuJf.js";import"./lion-input-stepper.DN5ovpJ5.js";import"./lion-input.By0swi2M.js";import"./lion-listbox.CTU7NZNy.js";import"./lion-radio.W2GOTGyE.js";import"./lion-select.C9bGI4xm.js";import"./lion-select-rich.Bx8FhDdQ.js";import"./lion-switch.aF4-DvwQ.js";import"./lion-textarea.BrDnhAaW.js";import"./lion-button-submit.DJFjv3gZ.js";import{l as a}from"./loadDefaultFeedbackMessages.BPteM1aE.js";import{R as o}from"./Required.DgHIr_Cn.js";import{M as r}from"./StringValidators.UXrPEtgv.js";import"./directive.CGE4aKEl.js";import"./LionButton.B9nVXwmc.js";import"./DisabledWithTabIndexMixin.DiSGvuwH.js";import"./DisabledMixin.Bm1nsErI.js";import"./dedupeMixin.6XPTJgK8.js";import"./ChoiceGroupMixin.D4jczhm9.js";import"./FormRegistrarMixin.DBLbGJl3.js";import"./InteractionStateMixin.C2Xjq1f8.js";import"./LocalizeMixin.VYu75dkK.js";import"./directive-helpers.CLllgGgm.js";import"./async-directive.CHVe8p0E.js";import"./getLocalizeManager.W5d_ICRU.js";import"./index.BNCfcFQh.js";import"./lazifyInstantiation.CgYLRMC3.js";import"./FormGroupMixin.Ccw5I-Vk.js";import"./Validator.DAOhFpDH.js";import"./ChoiceInputMixin.CLlllJmN.js";import"./LionInput.BizilKRR.js";import"./NativeTextFieldMixin.ChJsDAsi.js";import"./LionField.ChTPU14b.js";import"./LionCombobox.DXYgCoPB.js";import"./OverlayMixin.Clz3oycz.js";import"./withDropdownConfig.eRP55go6.js";import"./withClickInteraction.B1DPetIk.js";import"./validators.Dx-g-RY2.js";import"./LionOption.BBDF9KmV.js";import"./LionFieldset.CL5e8Y_z.js";import"./LionInputAmount.DL_OZTwY.js";import"./formatNumber.aN4wfHaw.js";import"./getLocale.PZ4ia-vo.js";import"./parseNumber.Cin8KryK.js";import"./NumberValidators.CmKpqCIb.js";import"./LionInputDate.DkmNkEpB.js";import"./formatDate.D_ccCp8N.js";import"./normalizeIntlDate.jFpsyBMC.js";import"./DateValidators.CEq8F9yx.js";import"./normalizeDateTime.BoDqBOW2.js";import"./if-defined.CV50pAZo.js";import"./ArrowMixin.1rQ7LGkW.js";import"./withBottomSheetConfig.Cflq9zAr.js";import"./withModalDialogConfig.CPyLhuB7.js";import"./LionCalendar.CzG2mKfg.js";import"./repeat.BYpCtbkJ.js";import"./LionInputTel.C9pKxb13.js";import"./PhoneUtilManager.DeOgNdAt.js";import"./preprocessors.C95AgBnD.js";import"./LionInputTelDropdown.CrPYoPBx.js";import"./ref.DN9F-cVD.js";import"./ScopedStylesController.JZrBxnCH.js";const p=()=>(a(),n`
    <lion-form>
      <form>
        <lion-fieldset name="fullName">
          <lion-input
            name="firstName"
            label="First Name"
            .fieldName="${"first name"}"
            .validators="${[new o]}"
          ></lion-input>
          <lion-input
            name="lastName"
            label="Last Name"
            .fieldName="${"last name"}"
            .validators="${[new o]}"
          ></lion-input>
        </lion-fieldset>
        <lion-input-date
          name="date"
          label="Date of application"
          .modelValue="${new Date("2000-12-12")}"
          .validators="${[new o]}"
        ></lion-input-date>
        <lion-input-datepicker
          name="datepicker"
          label="Date to be picked"
          .modelValue="${new Date("2020-12-12")}"
          .validators="${[new o]}"
        ></lion-input-datepicker>
        <lion-textarea
          name="bio"
          label="Biography"
          .fieldName="${"value"}"
          .validators="${[new o,new r(10)]}"
          help-text="Please enter at least 10 characters"
        ></lion-textarea>
        <lion-input-amount name="money" label="Money"></lion-input-amount>
        <lion-input-iban name="iban" label="Iban"></lion-input-iban>
        <lion-input-email name="email" label="Email"></lion-input-email>
        <lion-input-file name="file" label="File"></lion-input-file>
        <lion-input-tel name="tel" label="Telephone number"></lion-input-tel>
        <lion-checkbox-group
          label="What do you like?"
          name="checkers"
          .validators="${[new o]}"
          .fieldName="${"value"}"
        >
          <lion-checkbox .choiceValue="${"foo"}" label="I like foo"></lion-checkbox>
          <lion-checkbox .choiceValue="${"bar"}" label="I like bar"></lion-checkbox>
          <lion-checkbox .choiceValue="${"baz"}" label="I like baz"></lion-checkbox>
        </lion-checkbox-group>
        <lion-radio-group
          name="dinosaurs"
          label="Favorite dinosaur"
          .fieldName="${"dinosaur"}"
          .validators="${[new o]}"
        >
          <lion-radio .choiceValue="${"allosaurus"}" label="allosaurus"></lion-radio>
          <lion-radio .choiceValue="${"brontosaurus"}" label="brontosaurus"></lion-radio>
          <lion-radio .choiceValue="${"diplodocus"}" label="diplodocus"></lion-radio>
        </lion-radio-group>
        <lion-listbox name="favoriteFruit" label="Favorite fruit">
          <lion-option .choiceValue="${"Apple"}">Apple</lion-option>
          <lion-option checked .choiceValue="${"Banana"}">Banana</lion-option>
          <lion-option .choiceValue="${"Mango"}">Mango</lion-option>
        </lion-listbox>
        <lion-combobox
          .validators="${[new o]}"
          name="favoriteMovie"
          label="Favorite movie"
          autocomplete="both"
        >
          <lion-option checked .choiceValue="${"Rocky"}">Rocky</lion-option>
          <lion-option .choiceValue="${"Rocky II"}">Rocky II</lion-option>
          <lion-option .choiceValue="${"Rocky III"}">Rocky III</lion-option>
          <lion-option .choiceValue="${"Rocky IV"}">Rocky IV</lion-option>
          <lion-option .choiceValue="${"Rocky V"}">Rocky V</lion-option>
          <lion-option .choiceValue="${"Rocky Balboa"}">Rocky Balboa</lion-option>
        </lion-combobox>
        <lion-select-rich name="favoriteColor" label="Favorite color">
          <lion-option .choiceValue="${"red"}">Red</lion-option>
          <lion-option .choiceValue="${"hotpink"}" checked>Hotpink</lion-option>
          <lion-option .choiceValue="${"teal"}">Teal</lion-option>
        </lion-select-rich>
        <lion-select label="Lyrics" name="lyrics" .validators="${[new o]}">
          <select slot="input">
            <option value="1">Fire up that loud</option>
            <option value="2">Another round of shots...</option>
            <option value="3">Drop down for what?</option>
          </select>
        </lion-select>
        <lion-input-range
          name="range"
          min="1"
          max="5"
          .modelValue="${2.3}"
          unit="%"
          step="0.1"
          label="Input range"
        ></lion-input-range>
        <lion-checkbox-group
          name="terms"
          .validators="${[new o("",{getMessage:()=>"Please accept our terms."})]}"
        >
          <lion-checkbox
            .choiceValue="${"true"}"
            label="I blindly accept all terms and conditions"
          ></lion-checkbox>
        </lion-checkbox-group>
        <lion-switch name="notifications" label="Notifications"></lion-switch>
        <lion-input-stepper max="5" min="0" name="rsvp">
          <label slot="label">RSVP</label>
          <div slot="help-text">Max. 5 guests</div>
        </lion-input-stepper>
        <div class="buttons">
          <lion-button-submit>Submit</lion-button-submit>
          <lion-button-reset
            @click="${i=>i.currentTarget.parentElement.parentElement.parentElement.resetGroup()}"
            >Reset</lion-button-reset
          >
        </div>
      </form>
    </lion-form>
  `),m=document,c=[{key:"main",story:p}];let l=!1;for(const i of c){const e=m.querySelector(`[mdjs-story-name="${i.key}"]`);e&&(e.story=i.story,e.key=i.key,l=!0,Object.assign(e,{simulatorUrl:"/lion/next/simulator/",languages:[{key:"de-DE",name:"German"},{key:"en-GB",name:"English (United Kingdom)"},{key:"en-US",name:"English (United States)"},{key:"nl-NL",name:"Dutch"}]}))}l&&(customElements.get("mdjs-preview")||t(()=>import("./define.DYUong5B.js"),__vite__mapDeps([0,1,2,3,4,5])),customElements.get("mdjs-story")||t(()=>import("./define.m2CvvXyF.js"),__vite__mapDeps([6,2,3])));export{p as main};
