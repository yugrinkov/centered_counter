import { factory } from "./factory";

const inputs = {
  start: 0,
  step: 1,
};

let count = factory(inputs.start, inputs.step);

function update_count_and_reset_counter() {
  count = factory(inputs.start, inputs.step);
}

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", (event: Event) => {
  const start_value = +(event.target as HTMLInputElement).value;
  inputs.start = start_value;
  update_count_and_reset_counter();
});

step_control?.addEventListener("change", (event: Event) => {
  const step_value = +(event.target as HTMLInputElement).value;
  inputs.step = step_value;
  update_count_and_reset_counter();
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

function update_count() {
  current_count.innerHTML = String(count());
}

count_button.addEventListener("click", update_count);
