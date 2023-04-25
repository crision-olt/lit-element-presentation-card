import { css } from "lit";

export default css`
* {
  --snack-bk-color: #333;
  --snack-txt-color: #f5f5f5;
  --snack-font-size: 2.1rem;
  --snack-bottom: 0;
  --snack-radius: 1px;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:host {
  display: none;
  animation-name: fadeOut;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
:host-context([active]) {
  /* Handle CSS when host active */
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
#snackbar {
  border-radius: var(--snack-radius, 1px);
  min-width: 100%;
  z-index:9999;
  background-color: var(--snack-bk-color, #333);
  color: var(--snack-txt-color, #f5f5f5);
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: var(--snack-bottom, 0);
}
#snackbar__container {
  margin: calc(var(--snack-font-size, 2.1rem) * 1.1);
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr;
}
#snackbar__container__p {
  font-size: var(--snack-font-size, 2.1rem);
  font-weight: 400;
  line-height: var(--snack-font-size, 2.1rem);
}
#snackbar__container__button {
  width: var(--snack-font-size, 2.1rem);
  height: var(--snack-font-size, 2.1rem);
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
}
#snackbar__container__button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  right: 0;
  bottom: 0;
  width: calc(var(--snack-font-size, 2.1rem) * 2);
  height: calc(var(--snack-font-size, 2.1rem) * 2);
  background: #555;
  border-radius: 50%;
  z-index: -1;
  transform: scale(0);
  transition: 0.3s cubic-bezier(.95, .32, .37, 1.21);
}
#snackbar__container__button:hover::after {
  transform: scale(1);
}
#snackbar__container__button #snackbar__container__button__svg {
  width: var(--snack-font-size, 2.1rem);
  height: var(--snack-font-size, 2.1rem);
  fill: var(--snack-txt-color, #f5f5f5);
}
#snackbar__container__button:hover #snackbar__container__button__svg {
  transform: scale(0.95);
}
@media only screen and (min-width: 649px) {
  #snackbar {
    min-width: 50%;
  }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
`