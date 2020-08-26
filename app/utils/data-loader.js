import $ from 'jquery';

export default function loadData() {
  return $.getJSON(`/data/fake-data-pt-2.json`);
}
