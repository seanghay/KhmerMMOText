import '@picocss/pico'

const $input = document.querySelector("#input")
const $output = document.querySelector("#output")
const $dot = document.querySelector("#dot")

$input.value = 'មនុស្សកំពូលចង្រៃ សរសេរអក្សរខ្មែររញែរញៃអានមិនដាច់';

invalidate()

$input.addEventListener('input', invalidate)
$dot.addEventListener('input', invalidate)

function invalidate() {
  const dot = '.'.repeat(+$dot.value)
  $output.value = $input.value
  .replace(/([\u1780-\u17FF](\u17d2[\u1780-\u17FF]|[\u17B6-\u17D1\u17D3\u17DD])*)/gm, "$1" + dot)
}