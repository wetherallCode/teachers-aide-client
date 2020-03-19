import React, { useState, useEffect } from 'react'

export function useToggle(initialValue) {
	const [value, setValue] = useState(initialValue)

	const toggleValue = () => setValue(!value)

	return [value, toggleValue]
}
