const AddressExtension = require("./complex/AddressExtension");
const DocumentAdditionalExpense = require("./complex/DocumentAdditionalExpense");
const DocumentInstallment = require("./complex/DocumentInstallment");
const DocumentLine = require("./complex/DocumentLine");
const DocumentPackage = require("./complex/DocumentPackage");
const DocumentReference = require("./complex/DocumentReference");
const DocumentSpecialLine = require("./complex/DocumentSpecialLine");
const Document_ApprovalRequest = require("./complex/Document_ApprovalRequest");
const DownPaymentToDraw = require("./complex/DownPaymentToDraw");
const EWayBillDetails = require("./complex/EWayBillDetails");
const ElectronicProtocol = require("./complex/ElectronicProtocol");
const TaxExtension = require("./complex/TaxExtension");
const WithholdingTaxData = require("./complex/WithholdingTaxData");
const WithholdingTaxDataWTX = require("./complex/WithholdingTaxDataWTX");


class Documents {
    constructor(sapObjectName) {
        this.sapObjectName = sapObjectName;
        this.DocEntry = new Number();
        this.DocNum = new Number();
        this.DocType = new String();
        this.HandWritten = new String();
        this.Printed = new String();
        this.DocDate = new String();
        this.DocDueDate = new String();
        this.CardCode = new String();
        this.CardName = new String();
        this.Address = new String();
        this.NumAtCard = new String();
        this.DocTotal = new Number();
        this.AttachmentEntry = new Number();
        this.DocCurrency = new String();
        this.DocRate = new Number();
        this.Reference1 = new String();
        this.Reference2 = new String();
        this.Comments = new String();
        this.JournalMemo = new String();
        this.PaymentGroupCode = new Number();
        this.DocTime = new String();
        this.SalesPersonCode = new Number();
        this.TransportationCode = new Number();
        this.Confirmed = new String();
        this.ImportFileNum = new Number();
        this.SummeryType = new String();
        this.ContactPersonCode = new Number();
        this.ShowSCN = new String();
        this.Series = new Number();
        this.TaxDate = new String();
        this.PartialSupply = new String();
        this.DocObjectCode = new String();
        this.ShipToCode = new String();
        this.Indicator = new String();
        this.FederalTaxID = new String();
        this.DiscountPercent = new Number();
        this.PaymentReference = new String();
        this.CreationDate = new String();
        this.UpdateDate = new String();
        this.FinancialPeriod = new Number();
        this.TransNum = new Number();
        this.VatSum = new Number();
        this.VatSumSys = new Number();
        this.VatSumFc = new Number();
        this.NetProcedure = new String();
        this.DocTotalFc = new Number();
        this.DocTotalSys = new Number();
        this.Form1099 = new Number();
        this.Box1099 = new String();
        this.RevisionPo = new String();
        this.RequriedDate = new String();
        this.CancelDate = new String();
        this.BlockDunning = new String();
        this.Submitted = new String();
        this.Segment = new Number();
        this.PickStatus = new String();
        this.Pick = new String();
        this.PaymentMethod = new String();
        this.PaymentBlock = new String();
        this.PaymentBlockEntry = new Number();
        this.CentralBankIndicator = new String();
        this.MaximumCashDiscount = new String();
        this.Reserve = new String();
        this.Project = new String();
        this.ExemptionValidityDateFrom = new String();
        this.ExemptionValidityDateTo = new String();
        this.WareHouseUpdateType = new String();
        this.Rounding = new String();
        this.ExternalCorrectedDocNum = new String();
        this.InternalCorrectedDocNum = new Number();
        this.NextCorrectingDocument = new Number();
        this.DeferredTax = new String();
        this.TaxExemptionLetterNum = new String();
        this.WTApplied = new Number();
        this.WTAppliedFC = new Number();
        this.BillOfExchangeReserved = new String();
        this.AgentCode = new String();
        this.WTAppliedSC = new Number();
        this.TotalEqualizationTax = new Number();
        this.TotalEqualizationTaxFC = new Number();
        this.TotalEqualizationTaxSC = new Number();
        this.NumberOfInstallments = new Number();
        this.ApplyTaxOnFirstInstallment = new String();
        this.WTNonSubjectAmount = new Number();
        this.WTNonSubjectAmountSC = new Number();
        this.WTNonSubjectAmountFC = new Number();
        this.WTExemptedAmount = new Number();
        this.WTExemptedAmountSC = new Number();
        this.WTExemptedAmountFC = new Number();
        this.BaseAmount = new Number();
        this.BaseAmountSC = new Number();
        this.BaseAmountFC = new Number();
        this.WTAmount = new Number();
        this.WTAmountSC = new Number();
        this.WTAmountFC = new Number();
        this.VatDate = new String();
        this.DocumentsOwner = new Number();
        this.FolioPrefixString = new String();
        this.FolioNumber = new Number();
        this.DocumentSubType = new String();
        this.BPChannelCode = new String();
        this.BPChannelContact = new Number();
        this.Address2 = new String();
        this.DocumentStatus = new String();
        this.PeriodIndicator = new String();
        this.PayToCode = new String();
        this.ManualNumber = new String();
        this.UseShpdGoodsAct = new String();
        this.IsPayToBank = new String();
        this.PayToBankCountry = new String();
        this.PayToBankCode = new String();
        this.PayToBankAccountNo = new String();
        this.PayToBankBranch = new String();
        this.BPL_IDAssignedToInvoice = new Number();
        this.DownPayment = new Number();
        this.ReserveInvoice = new String();
        this.LanguageCode = new Number();
        this.TrackingNumber = new String();
        this.PickRemark = new String();
        this.ClosingDate = new String();
        this.SequenceCode = new Number();
        this.SequenceSerial = new Number();
        this.SeriesString = new String();
        this.SubSeriesString = new String();
        this.SequenceModel = new String();
        this.UseCorrectionVATGroup = new String();
        this.TotalDiscount = new Number();
        this.DownPaymentAmount = new Number();
        this.DownPaymentPercentage = new Number();
        this.DownPaymentType = new String();
        this.DownPaymentAmountSC = new Number();
        this.DownPaymentAmountFC = new Number();
        this.VatPercent = new Number();
        this.ServiceGrossProfitPercent = new Number();
        this.OpeningRemarks = new String();
        this.ClosingRemarks = new String();
        this.RoundingDiffAmount = new Number();
        this.RoundingDiffAmountFC = new Number();
        this.RoundingDiffAmountSC = new Number();
        this.Cancelled = new String();
        this.SignatureInputMessage = new String();
        this.SignatureDigest = new String();
        this.CertificationNumber = new String();
        this.PrivateKeyVersion = new Number();
        this.ControlAccount = new String();
        this.InsuranceOperation347 = new String();
        this.ArchiveNonremovableSalesQuotation = new String();
        this.GTSChecker = new Number();
        this.GTSPayee = new Number();
        this.ExtraMonth = new Number();
        this.ExtraDays = new Number();
        this.CashDiscountDateOffset = new Number();
        this.StartFrom = new String();
        this.NTSApproved = new String();
        this.ETaxWebSite = new Number();
        this.ETaxNumber = new String();
        this.NTSApprovedNumber = new String();
        this.EDocGenerationType = new String();
        this.EDocSeries = new Number();
        this.EDocNum = new String();
        this.EDocExportFormat = new Number();
        this.EDocStatus = new String();
        this.EDocErrorCode = new String();
        this.EDocErrorMessage = new String();
        this.DownPaymentStatus = new String();
        this.GroupSeries = new Number();
        this.GroupNumber = new Number();
        this.GroupHandWritten = new String();
        this.ReopenOriginalDocument = new String();
        this.ReopenManuallyClosedOrCanceledDocument = new String();
        this.CreateOnlineQuotation = new String();
        this.POSEquipmentNumber = new String();
        this.POSManufacturerSerialNumber = new String();
        this.POSCashierNumber = new Number();
        this.ApplyCurrentVATRatesForDownPaymentsToDraw = new String();
        this.ClosingOption = new String();
        this.SpecifiedClosingDate = new String();
        this.OpenForLandedCosts = new String();
        this.AuthorizationStatus = new String();
        this.TotalDiscountFC = new Number();
        this.TotalDiscountSC = new Number();
        this.RelevantToGTS = new String();
        this.BPLName = new String();
        this.VATRegNum = new String();
        this.AnnualInvoiceDeclarationReference = new Number();
        this.Supplier = new String();
        this.Releaser = new Number();
        this.Receiver = new Number();
        this.BlanketAgreementNumber = new Number();
        this.IsAlteration = new String();
        this.CancelStatus = new String();
        this.AssetValueDate = new String();
        this.Requester = new String();
        this.RequesterName = new String();
        this.RequesterBranch = new Number();
        this.RequesterDepartment = new Number();
        this.RequesterEmail = new String();
        this.SendNotification = new String();
        this.ReqType = new Number();
        this.InvoicePayment = new String();
        this.DocumentDelivery = new String();
        this.AuthorizationCode = new String();
        this.StartDeliveryDate = new String();
        this.StartDeliveryTime = new String();
        this.EndDeliveryDate = new String();
        this.EndDeliveryTime = new String();
        this.VehiclePlate = new String();
        this.ATDocumentType = new String();
        this.ElecCommStatus = new String();
        this.ElecCommMessage = new String();
        this.ReuseDocumentNum = new String();
        this.ReuseNotaFiscalNum = new String();
        this.PrintSEPADirect = new String();
        this.FiscalDocNum = new String();
        this.POSDailySummaryNo = new Number();
        this.POSReceiptNo = new Number();
        this.PointOfIssueCode = new String();
        this.Letter = new String();
        this.FolioNumberFrom = new Number();
        this.FolioNumberTo = new Number();
        this.InterimType = new String();
        this.RelatedType = new Number();
        this.RelatedEntry = new Number();
        this.SAPPassport = new String();
        this.DocumentTaxID = new String();
        this.DateOfReportingControlStatementVAT = new String();
        this.ReportingSectionControlStatementVAT = new String();
        this.ExcludeFromTaxReportControlStatementVAT = new String();
        this.POS_CashRegister = new Number();
        this.UpdateTime = new String();
        this.PriceMode = new String();
        this.DownPaymentTrasactionID = new String();
        this.Revision = new String();
        this.OriginalRefNo = new String();
        this.OriginalRefDate = new String();
        this.GSTTransactionType = new String();
        this.OriginalCreditOrDebitNo = new String();
        this.OriginalCreditOrDebitDate = new String();
        this.ECommerceOperator = new String();
        this.ECommerceGSTIN = new String();
        this.TaxInvoiceNo = new String();
        this.TaxInvoiceDate = new String();
        this.ShipFrom = new String();
        this.CommissionTrade = new String();
        this.CommissionTradeReturn = new String();
        this.UseBillToAddrToDetermineTax = new String();
        this.IssuingReason = new Number();
        this.Cig = new Number();
        this.Cup = new Number();
        this.EDocType = new String();
        this.PaidToDate = new Number();
        this.PaidToDateFC = new Number();
        this.PaidToDateSys = new Number();
        this.Document_ApprovalRequests = [Document_ApprovalRequest];
        this.DocumentLines = [DocumentLine];
        this.EWayBillDetails = new EWayBillDetails();
        this.ElectronicProtocols = [ElectronicProtocol];
        this.DocumentAdditionalExpenses = [DocumentAdditionalExpense];
        this.WithholdingTaxDataWTXCollection = [WithholdingTaxDataWTX];
        this.WithholdingTaxDataCollection = [WithholdingTaxData];
        this.DocumentPackages = [DocumentPackage];
        this.DocumentSpecialLines = [DocumentSpecialLine];
        this.DocumentInstallments = [DocumentInstallment];
        this.DownPaymentsToDraw = [DownPaymentToDraw];
        this.TaxExtension = new TaxExtension();
        this.AddressExtension = new AddressExtension();
        this.DocumentReferences = [DocumentReference];
    }
    sapObjectName;
    DocEntry;
    DocNum;
    DocType;
    HandWritten;
    Printed;
    DocDate;
    DocDueDate;
    CardCode;
    CardName;
    Address;
    NumAtCard;
    DocTotal;
    AttachmentEntry;
    DocCurrency;
    DocRate;
    Reference1;
    Reference2;
    Comments;
    JournalMemo;
    PaymentGroupCode;
    DocTime;
    SalesPersonCode;
    TransportationCode;
    Confirmed;
    ImportFileNum;
    SummeryType;
    ContactPersonCode;
    ShowSCN;
    Series;
    TaxDate;
    PartialSupply;
    DocObjectCode;
    ShipToCode;
    Indicator;
    FederalTaxID;
    DiscountPercent;
    PaymentReference;
    CreationDate;
    UpdateDate;
    FinancialPeriod;
    TransNum;
    VatSum;
    VatSumSys;
    VatSumFc;
    NetProcedure;
    DocTotalFc;
    DocTotalSys;
    Form1099;
    Box1099;
    RevisionPo;
    RequriedDate;
    CancelDate;
    BlockDunning;
    Submitted;
    Segment;
    PickStatus;
    Pick;
    PaymentMethod;
    PaymentBlock;
    PaymentBlockEntry;
    CentralBankIndicator;
    MaximumCashDiscount;
    Reserve;
    Project;
    ExemptionValidityDateFrom;
    ExemptionValidityDateTo;
    WareHouseUpdateType;
    Rounding;
    ExternalCorrectedDocNum;
    InternalCorrectedDocNum;
    NextCorrectingDocument;
    DeferredTax;
    TaxExemptionLetterNum;
    WTApplied;
    WTAppliedFC;
    BillOfExchangeReserved;
    AgentCode;
    WTAppliedSC;
    TotalEqualizationTax;
    TotalEqualizationTaxFC;
    TotalEqualizationTaxSC;
    NumberOfInstallments;
    ApplyTaxOnFirstInstallment;
    WTNonSubjectAmount;
    WTNonSubjectAmountSC;
    WTNonSubjectAmountFC;
    WTExemptedAmount;
    WTExemptedAmountSC;
    WTExemptedAmountFC;
    BaseAmount;
    BaseAmountSC;
    BaseAmountFC;
    WTAmount;
    WTAmountSC;
    WTAmountFC;
    VatDate;
    DocumentsOwner;
    FolioPrefixString;
    FolioNumber;
    DocumentSubType;
    BPChannelCode;
    BPChannelContact;
    Address2;
    DocumentStatus;
    PeriodIndicator;
    PayToCode;
    ManualNumber;
    UseShpdGoodsAct;
    IsPayToBank;
    PayToBankCountry;
    PayToBankCode;
    PayToBankAccountNo;
    PayToBankBranch;
    BPL_IDAssignedToInvoice;
    DownPayment;
    ReserveInvoice;
    LanguageCode;
    TrackingNumber;
    PickRemark;
    ClosingDate;
    SequenceCode;
    SequenceSerial;
    SeriesString;
    SubSeriesString;
    SequenceModel;
    UseCorrectionVATGroup;
    TotalDiscount;
    DownPaymentAmount;
    DownPaymentPercentage;
    DownPaymentType;
    DownPaymentAmountSC;
    DownPaymentAmountFC;
    VatPercent;
    ServiceGrossProfitPercent;
    OpeningRemarks;
    ClosingRemarks;
    RoundingDiffAmount;
    RoundingDiffAmountFC;
    RoundingDiffAmountSC;
    Cancelled;
    SignatureInputMessage;
    SignatureDigest;
    CertificationNumber;
    PrivateKeyVersion;
    ControlAccount;
    InsuranceOperation347;
    ArchiveNonremovableSalesQuotation;
    GTSChecker;
    GTSPayee;
    ExtraMonth;
    ExtraDays;
    CashDiscountDateOffset;
    StartFrom;
    NTSApproved;
    ETaxWebSite;
    ETaxNumber;
    NTSApprovedNumber;
    EDocGenerationType;
    EDocSeries;
    EDocNum;
    EDocExportFormat;
    EDocStatus;
    EDocErrorCode;
    EDocErrorMessage;
    DownPaymentStatus;
    GroupSeries;
    GroupNumber;
    GroupHandWritten;
    ReopenOriginalDocument;
    ReopenManuallyClosedOrCanceledDocument;
    CreateOnlineQuotation;
    POSEquipmentNumber;
    POSManufacturerSerialNumber;
    POSCashierNumber;
    ApplyCurrentVATRatesForDownPaymentsToDraw;
    ClosingOption;
    SpecifiedClosingDate;
    OpenForLandedCosts;
    AuthorizationStatus;
    TotalDiscountFC;
    TotalDiscountSC;
    RelevantToGTS;
    BPLName;
    VATRegNum;
    AnnualInvoiceDeclarationReference;
    Supplier;
    Releaser;
    Receiver;
    BlanketAgreementNumber;
    IsAlteration;
    CancelStatus;
    AssetValueDate;
    Requester;
    RequesterName;
    RequesterBranch;
    RequesterDepartment;
    RequesterEmail;
    SendNotification;
    ReqType;
    InvoicePayment;
    DocumentDelivery;
    AuthorizationCode;
    StartDeliveryDate;
    StartDeliveryTime;
    EndDeliveryDate;
    EndDeliveryTime;
    VehiclePlate;
    ATDocumentType;
    ElecCommStatus;
    ElecCommMessage;
    ReuseDocumentNum;
    ReuseNotaFiscalNum;
    PrintSEPADirect;
    FiscalDocNum;
    POSDailySummaryNo;
    POSReceiptNo;
    PointOfIssueCode;
    Letter;
    FolioNumberFrom;
    FolioNumberTo;
    InterimType;
    RelatedType;
    RelatedEntry;
    SAPPassport;
    DocumentTaxID;
    DateOfReportingControlStatementVAT;
    ReportingSectionControlStatementVAT;
    ExcludeFromTaxReportControlStatementVAT;
    POS_CashRegister;
    UpdateTime;
    PriceMode;
    DownPaymentTrasactionID;
    Revision;
    OriginalRefNo;
    OriginalRefDate;
    GSTTransactionType;
    OriginalCreditOrDebitNo;
    OriginalCreditOrDebitDate;
    ECommerceOperator;
    ECommerceGSTIN;
    TaxInvoiceNo;
    TaxInvoiceDate;
    ShipFrom;
    CommissionTrade;
    CommissionTradeReturn;
    UseBillToAddrToDetermineTax;
    IssuingReason;
    Cig;
    Cup;
    EDocType;
    PaidToDate;
    PaidToDateFC;
    PaidToDateSys;
    Document_ApprovalRequests;
    DocumentLines;
    EWayBillDetails;
    ElectronicProtocols;
    DocumentAdditionalExpenses;
    WithholdingTaxDataWTXCollection;
    WithholdingTaxDataCollection;
    DocumentPackages;
    DocumentSpecialLines;
    DocumentInstallments;
    DownPaymentsToDraw;
    TaxExtension;
    AddressExtension;
    DocumentReferences;
}

module.exports = Documents;