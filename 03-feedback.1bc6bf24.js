!function(){var e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),r=_.throttle((function(){var e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var r=JSON.parse(e);t.value=r.email,a.value=r.message}})),t.addEventListener("input",r),a.addEventListener("input",r),e.addEventListener("submit",(function(e){e.preventDefault(),t.value="",a.value="",localStorage.removeItem("feedback-form-state");console.log("Form submitted:",{email:"",message:""})}))}();
//# sourceMappingURL=03-feedback.1bc6bf24.js.map