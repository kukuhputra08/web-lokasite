export const mapOrderToSupabase = (order) => {
  return {
    order_code: order.orderCode,

    full_name: order.fullName,
    business_name: order.businessName,
    whatsapp: order.whatsapp,
    email: order.email || null,

    business_type: order.businessType,
    selected_package: order.selectedPackage,
    package_description: order.packageDescription,
    package_base_price: order.packageBasePrice,

    website_goal: order.websiteGoal || null,
    included_features: order.includedFeatures || [],
    additional_features: order.additionalFeatures || [],
    final_features: order.finalFeatures || [],
    additional_feature_total: order.additionalFeatureTotal || 0,
    estimated_total: order.estimatedTotal || 0,

    deadline: order.deadline || null,
    reference_website: order.referenceWebsite || null,
    description: order.description,

    status: order.status || "Pesanan Baru",
    admin_note: order.adminNote || "",
  };
};

export const mapOrderFromSupabase = (order) => {
  return {
    id: order.id,
    orderCode: order.order_code,

    fullName: order.full_name,
    businessName: order.business_name,
    whatsapp: order.whatsapp,
    email: order.email,

    businessType: order.business_type,
    selectedPackage: order.selected_package,
    packageDescription: order.package_description,
    packageBasePrice: order.package_base_price,

    websiteGoal: order.website_goal,
    includedFeatures: order.included_features || [],
    additionalFeatures: order.additional_features || [],
    finalFeatures: order.final_features || [],
    additionalFeatureTotal: order.additional_feature_total || 0,
    estimatedTotal: order.estimated_total || 0,

    deadline: order.deadline,
    referenceWebsite: order.reference_website,
    description: order.description,

    status: order.status,
    adminNote: order.admin_note || "",

    createdAt: order.created_at,
    updatedAt: order.updated_at,
  };
};