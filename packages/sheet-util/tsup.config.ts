import { defineConfig } from 'tsup';

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		writer: 'src/writer/index.ts',
	},
	cjsInterop: true,
});
