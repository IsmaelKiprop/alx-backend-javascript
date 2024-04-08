export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true; // Changed var to let
    let task2 = false; // Changed var to let
  }

  return [task, task2];
}