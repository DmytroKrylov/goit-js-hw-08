!function(){var e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]'),r=_.throttle((function(){var e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var r=JSON.parse(e);a.value=r.email,t.value=r.message}})),e.addEventListener("input",r),e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");var r={email:a.value,message:t.value};console.log("Form submitted:",r),a.value="",t.value=""}))}();
//# sourceMappingURL=03-feedback.c2fd0df0.js.map
