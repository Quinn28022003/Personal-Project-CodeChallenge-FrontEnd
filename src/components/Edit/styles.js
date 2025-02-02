import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Edit: {
		...tw``,
		'.row': {
			...tw`flex justify-between`,
			...tw`max-md:merge-[ block ]`,
			'.col': {
				...tw``,
				'.container-image': {
					...tw`text-center mb-[20px]`,
					'.image': {
						...tw`w-full mb-[20px]`,
						...tw`max-md:merge-[ w-[50%] m-[0px auto 20px auto] block ]`
					},
					'.upload': {
						...tw``
					}
				},
				'.form': {
					...tw``,
					'.title': {
						...tw`mb-[10px]`,
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								})
					},
					'.container-input': {
						...tw`m-[20px 0px]`,
						'.label': {
							...tw`mb-[10px] block opacity-40`,
							...(darkModeLocalStorage === false
								? {}
								: {
										...tw`text-white`
									})
						},
						'.content': {
							...tw`flex gap-6`,
							...tw`max-sm:merge-[ gap-3 ]`,
							'.input': {
								...tw``,
								...(darkModeLocalStorage === false
									? {}
									: {
											...tw`text-gray-500`
										})
							},
							'.btn': {
								...tw``
							}
						}
					},
					'.account': {
						...tw`mt-[30px]`
					},
					'.social-account': {
						...tw`mt-[30px]`
					},
					'.container-social-account': {
						...tw`mb-[20px]`,
						'.btn': {
							...tw``
						}
					},
					'.container-btn': {
						...tw`text-center`,
						'.btn': {
							...tw``
						}
					}
				}
			}
		}
	}
}))

export default useStyles
