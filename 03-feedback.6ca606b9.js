const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),o=_.throttle((()=>{const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const o=JSON.parse(e);t.value=o.email,a.value=o.message}})),e.addEventListener("input",o),e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");const o={email:t.value,message:a.value};console.log("Form submitted:",o),t.value="",a.value=""}));
//# sourceMappingURL=03-feedback.6ca606b9.js.map