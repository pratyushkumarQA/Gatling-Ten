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
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "683",
        "ok": "683",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "percentiles1": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles2": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "percentiles3": {
        "total": "665",
        "ok": "665",
        "ko": "-"
    },
    "percentiles4": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
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
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "683",
        "ok": "683",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    },
    "percentiles1": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles2": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "percentiles3": {
        "total": "679",
        "ok": "679",
        "ko": "-"
    },
    "percentiles4": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
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
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles2": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles3": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "percentiles4": {
        "total": "252",
        "ok": "252",
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
