
scotchApp.service('invitationFileTranslationService', ['translationService', function (translationService) {
    var self = this;
    self.messages = {};

    self.keys = {
        NotSent:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/statustext",
                    ActionConfirmationMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/actionconfirmationmessage",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/statusmessage",
                    UserActionText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/useractiontext"
                },
        Success:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/statustext",
                    ActionConfirmationMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/actionconfirmationmessage",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/statusmessage",
                    UserActionText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/useractiontext"
                },
        CancelledByUser:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledbyuser/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledbyuser/statusmessage"
                },
        CancelledHasReviewed:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledhasreviewed/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledhasreviewed/statusmessage"
                },

        CancelledTooManyMails:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledtoomanymails/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledtoomanymails/statusmessage"
                },

        CancelledNoTemplate:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancellednotemplate/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancellednotemplate/statusmessage"
                },

        CancelledInvalidCustomerEmail:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/statusmessage",
                    ActionConfirmationMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/actionconfirmationmessage",
                    UserActionText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/useractiontext"
                },
        CancelledSendTwice:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledsendtwice/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledsendtwice/statusmessage"
                },
        CancelledMissingKickstartSubjectOrBody:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledmissingkickstartsubjectorbody/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledmissingkickstartsubjectorbody/statusmessage"
                },
        CancelledInvalidWebshopEmail:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidwebshopemail/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidwebshopemail/statusmessage"
                },
        DomainEmailOrderIDCombinationHasAlreadyBeenInvited:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/statustext",
                    ActionConfirmationMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/actionconfirmationmessage",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/statusmessage",
                    UserActionText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/useractiontext"
                },
        UserBlocked:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/userblocked/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/userblocked/statusmessage"
                },
        DroppedUnsubscribedAddress:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statusmessage"
                },
        Unsubscribe:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statusmessage"
                },
        SpfFailed:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/statustext",
                    ActionConfirmationMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/actionconfirmationmessage",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/statusmessage",
                    UserActionText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/useractiontext"
                },
        DeliveryInProgress:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deliveryinprogress/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deliveryinprogress/statusmessage"
                },
        DroppedInvalidSmtpapiHeader:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalidsmtpapi/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalidsmtpapi/statusmessage"
                },
        DroppedSpamContent:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamcontent/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamcontent/statusmessage"
                },
        DroppedBouncedAddress:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedbounced/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedbounced/statusmessage"
                },
        DroppedSpamReportingAddress:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamreport/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamreport/statusmessage"
                },
        DroppedInvalid:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalid/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalid/statusmessage"
                },
        Bounce:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/bounce/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/bounce/statusmessage"
                },
       SpamReport:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spamreport/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spamreport/statusmessage"
                },
        Deferred:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deferred/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deferred/statusmessage"
                },
        CancelledAlreadyReceivedInvitation:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledalreadyreceivedinvitation/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledalreadyreceivedinvitation/statusmessage"
                },
        CancelledRecipientInGracePeriod:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledrecipientingraceperiod/statustext",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledrecipientingraceperiod/statusmessage"
                },
       CancelledOrderIdNotFound:
                {
                    StatusText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/statustext",
                    ActionConfirmationMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/actionconfirmationmessage",
                    StatusMessage: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/statusmessage",
                    UserActionText: "b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/useractiontext"
                }

    };

    self.loadLanguages = function () {
        return self.messages = {
            NotSent:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/statustext"),
                    ActionConfirmationMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/actionconfirmationmessage"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/statusmessage"),
                    UserActionText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/notsent/useractiontext")
                },
            Success:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/statustext"),
                    ActionConfirmationMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/actionconfirmationmessage"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/statusmessage"),
                    UserActionText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/success/useractiontext")
                },
            CancelledByUser:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledbyuser/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledbyuser/statusmessage")
                },
            CancelledHasReviewed:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledhasreviewed/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledhasreviewed/statusmessage")
                },

            CancelledTooManyMails:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledtoomanymails/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledtoomanymails/statusmessage")
                },

            CancelledNoTemplate:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancellednotemplate/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancellednotemplate/statusmessage")
                },

            CancelledInvalidCustomerEmail:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/statusmessage"),
                    ActionConfirmationMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/actionconfirmationmessage"),
                    UserActionText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidcustomeremail/useractiontext")
                },
            CancelledSendTwice:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledsendtwice/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledsendtwice/statusmessage")
                },
            CancelledMissingKickstartSubjectOrBody:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledmissingkickstartsubjectorbody/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledmissingkickstartsubjectorbody/statusmessage")
                },
            CancelledInvalidWebshopEmail:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidwebshopemail/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledinvalidwebshopemail/statusmessage")
                },
            DomainEmailOrderIDCombinationHasAlreadyBeenInvited:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/statustext"),
                    ActionConfirmationMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/actionconfirmationmessage"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/statusmessage"),
                    UserActionText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/domainemailorderidcombinationhasalreadybeeninvited/useractiontext")
                },
            UserBlocked:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/userblocked/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/userblocked/statusmessage")
                },
            DroppedUnsubscribedAddress:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statusmessage")
                },
            Unsubscribe:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/emailisunsubscribed/statusmessage")
                },
            SpfFailed:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/statustext"),
                    ActionConfirmationMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/actionconfirmationmessage"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/statusmessage"),
                    UserActionText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spffailed/useractiontext")
                },
            DeliveryInProgress:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deliveryinprogress/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deliveryinprogress/statusmessage")
                },
            DroppedInvalidSmtpapiHeader:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalidsmtpapi/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalidsmtpapi/statusmessage")
                },
            DroppedSpamContent:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamcontent/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamcontent/statusmessage")
                },
            DroppedBouncedAddress:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedbounced/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedbounced/statusmessage")
                },
            DroppedSpamReportingAddress:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamreport/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedspamreport/statusmessage")
                },
          DroppedInvalid:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalid/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/droppedinvalid/statusmessage")
                },
            Bounce:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/bounce/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/bounce/statusmessage")
                },
            SpamReport:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spamreport/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/spamreport/statusmessage")
                },
            Deferred:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deferred/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/deferred/statusmessage")
                },
            CancelledAlreadyReceivedInvitation:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledalreadyreceivedinvitation/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledalreadyreceivedinvitation/statusmessage")
                },
           CancelledRecipientInGracePeriod:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledrecipientingraceperiod/statustext"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledrecipientingraceperiod/statusmessage")
                },
            CancelledOrderIdNotFound:
                {
                    StatusText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/statustext"),
                    ActionConfirmationMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/actionconfirmationmessage"),
                    StatusMessage: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/statusmessage"),
                    UserActionText: get("b2b2010/pages/modules/feedbackmailhistory/invitationstatus/cancelledorderidnotfound/useractiontext")
                }
        };
    };

    var intialize = function () {
        var result = '';
        $.each(self.keys, function (key, value) {
            $.each(value, function (key1, value1) {
                result = result + value1 + ',';
            });

            if (result.length > 1800) {
                var url = result.substring(0, result.length);
                getData(url);
                result = '';
            }
        });

        var url1 = result.substring(0, result.length);
        getData(url1);
    };

    function getData(result) {
        translationService.LoadLanguagesInBatch(result);
    }

    function get(key) {
        var data = localStorage.getItem(key);
        if (data) {
            return data;
        }
        return null;
    };

    self.ClearLanguages = function () {
        for (var key in self.keys) {
            translationService.ClearData(self.keys[key]);
        }
    };

    intialize();

} ]);
