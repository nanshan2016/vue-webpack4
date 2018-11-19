/**
 * Created by gaoying on 2018/11/19.
 */
import { get, post } from "@/tools/async-tool";
const pre=process.env.VUE_APP_HOST;

export function demo(params) {
	let url = pre + '/dict/oricate/top/1';
	return get(url, params);
}