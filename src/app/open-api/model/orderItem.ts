/**
 * kkl Education API
 * Education new project|
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: yochai@one1.co.il
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ItemsByTypeOrder } from './itemsByTypeOrder';
import { Status } from './status';
import { Supplier } from './supplier';


export interface OrderItem { 
    supplierOrder?: Supplier;
    statusOrder?: Status;
    tripId?: number;
    orderId?: number;
    itemIndx?: number;
    orderItemDetails?: ItemsByTypeOrder;
    itemId?: number | null;
    itemCost?: number | null;
    billingSupplier?: number | null;
    billingCustomer?: number | null;
    isVat?: number | null;
    start?: string | null;
    end?: string | null;
    amount?: number | null;
    startHour?: string | null;
    endHour?: string | null;
    exitPoint?: number | null;
    endPlace?: string | null;
    startPlace?: string | null;
    placeForCalculation?: string | null;
    comment?: string | null;
    internalComment?: string | null;
    peopleInTrip?: number | null;
    userName?: string | null;
    generateDate?: string | null;
    paymentMonth?: number | null;
    paymentYear?: number | null;
    status?: Status;
    sentBy?: string | null;
    approvedBy?: string | null;
    approvedDate?: string | null;
    approvedByIdno?: number | null;
    approvedByUser?: string | null;
    cancelDate?: string | null;
    causeCancellation?: string | null;
    cancelBy?: string | null;
    approvalTraining?: number | null;
    approvalTrainingUser?: string | null;
    approvalTrainingDate?: string | null;
    emailSentDate?: string | null;
    approvedCancelBy?: string | null;
    approvedCancelDate?: string | null;
    approvedCancelIdno?: number | null;
    sentChilan?: number | null;
    sentChilanDate?: string | null;
    explainComment?: string | null;
    retroSendChilan?: number | null;
    paymentApproval?: number | null;
    paymentApprovalUser?: string | null;
    paymentApprovalDate?: string | null;
    isSlaraySection?: number | null;
    slaraySectionUser?: string | null;
    slaraySectionDate?: string | null;
    receiptFromGuideDate?: string | null;
    includeInvoice?: number | null;
    approvalAccountant?: number | null;
    approvalAccountantZikuyDate?: string | null;
    attributeManagerApproval?: number | null;
    attributeManagerApprovalDate?: string | null;
    guideTz?: number | null;
    guideType?: number | null;
    guideName?: string | null;
    rakazApproval?: number | null;
    rakazApprovalDate?: string | null;
    rakazApprovalUser?: string | null;
    guideId?: number | null;
    itemBeforeChange?: number | null;
    datesTemp?: Array<string>;
    isGuideSleep?: number | null;
    isCopyRow?: boolean;
}

