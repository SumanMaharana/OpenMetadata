/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 /**
 * Data Insight Custom Chart Result List
 */
export interface DataInsightCustomChartResultList {
    kpiDetails?: KpiDetails;
    /**
     * List of Results
     */
    results?: DataInsightCustomChartResult[];
}

/**
 * KPI details for the data insight chart.
 */
export interface KpiDetails {
    /**
     * End Date of KPI
     */
    endDate?: string;
    /**
     * Start Date of KPI
     */
    startDate?: string;
    /**
     * Target value of KPI
     */
    target?: number;
    [property: string]: any;
}

/**
 * Data Insight Custom Chart Result
 */
export interface DataInsightCustomChartResult {
    /**
     * Count of Result
     */
    count?: number;
    /**
     * Date of Result
     */
    day?: number;
    /**
     * Group of Result
     */
    group?: string;
    /**
     * Metric Name
     */
    metric?: string;
    /**
     * Term of Result, used in case of horizontal axis not timestamp
     */
    term?: string;
}