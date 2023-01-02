import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface DataState {
    active: boolean;
    comments: string | null;
    companyId: number;
    creationDate: string;
    customEvaluationTimeLimit: null | string | number;
    deleted: null | boolean;
    error: boolean;
    errorMap: any;
    ignoreWordStats: boolean;
    insertDate: string;
    keywords: {
        errorMap: any;
        examples: {
            errorMap: any;
            exampleId: null | unknown;
            exampleText: string;
            insertDate: null | unknown;
            showExample: boolean;
            tokens: {
                position: {
                    begin: number;
                    end: number;
                };
                segment: string;
                tag: string;
            }[];
        }[];
        insertDate: null | unknown;
        keywordId: null | unknown;
        keywordText: {
            value: string;
            optional: boolean
        }[] | string[] | string;
        lang: string;
    }[];
    lastUpdateDate: null | string;
    maintenanceStatus: {
        inMaintenance?: boolean | null;
        maintenanceText?: string | null;
    } | null;
    modifiedDate: null | string;
    numberOfKeywords: number;
    priority: number;
    publicResponseId: number;
    responseEngineId: number;
    responseGroupId: number;
    responseGroupName: string;
    responseId: number;
    responseName: string;
    source: string;
    _id: string;
}

const initialState: DataState = {
    active: true,
    comments: null,
    companyId: 0,
    creationDate: "",
    customEvaluationTimeLimit: null,
    deleted: null,
    error: false,
    errorMap: {},
    ignoreWordStats: false,
    insertDate: "",
    keywords: [
        {
            errorMap: {},
            examples: [
                {
                    errorMap: {},
                    exampleId: null,
                    exampleText: "",
                    insertDate: null,
                    showExample: true,
                    tokens: [
                        {
                            position: {
                                begin: 0,
                                end: 0,
                            },
                            segment: "",
                            tag: "",
                        }
                    ],
                }
            ],
            insertDate: null,
            keywordId: null,
            keywordText: [
                {
                    value: "",
                    optional: false
                }
            ],
            lang: "",
        }
    ],
    lastUpdateDate: null,
    maintenanceStatus: null,
    modifiedDate: null,
    numberOfKeywords: 0,
    priority: 0,
    publicResponseId: 0,
    responseEngineId: 0,
    responseGroupId: 0,
    responseGroupName: "",
    responseId: 0,
    responseName: "",
    source: "private",
    _id: "",
}

export const responseSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setDataState: (state, action: PayloadAction<DataState>) => {
            state = action.payload;
        }
    },
})

export const { setDataState } = responseSlice.actions

export default responseSlice.reducer