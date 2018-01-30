import { css } from 'styled-components'

const sizes = {
	desktopAndDown: 90000,
	tabletAndDown: 1300,
	phoneAndDown: 676
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
	return acc
}, {})

export default media
