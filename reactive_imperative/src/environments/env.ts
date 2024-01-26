import { isDevMode } from "@angular/core";
import { environment as dev_env} from "./environment.dev";
import { environment as prod_env} from "./environment.prod";

export const API_URL = isDevMode() ? dev_env.api_url : prod_env.api_url;
