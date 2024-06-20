var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35",
        "ok": "35",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "-"
    },
    "percentiles1": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles2": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles3": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "percentiles4": {
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.4",
        "ok": "1.4",
        "ko": "-"
    }
},
contents: {
"req_get-all-video-g-6a25e": {
        type: "REQUEST",
        name: "Get all video games",
path: "Get all video games",
pathFormatted: "req_get-all-video-g-6a25e",
stats: {
    "name": "Get all video games",
    "numberOfRequests": {
        "total": "18",
        "ok": "18",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "368",
        "ok": "368",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "percentiles1": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "percentiles2": {
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "percentiles3": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "percentiles4": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.72",
        "ok": "0.72",
        "ko": "-"
    }
}
    },"req_authenticate-ea80a": {
        type: "REQUEST",
        name: "Authenticate",
path: "Authenticate",
pathFormatted: "req_authenticate-ea80a",
stats: {
    "name": "Authenticate",
    "numberOfRequests": {
        "total": "17",
        "ok": "17",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles1": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles2": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "percentiles3": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "percentiles4": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.68",
        "ok": "0.68",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
