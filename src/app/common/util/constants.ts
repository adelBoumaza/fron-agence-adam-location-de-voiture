export enum Constant{
    /**
     * URL SERVICE WEB
     */
    baseUrl = '/api/v1',
    saveClientUrl = '/client/saveClient/withUser',
    findAllClient = '/client/findAll',
    oauth = '/oauth/token',
    currentUser = '/getCurrentUser',
    saveVehiculeUrl = '/voiture/saveVoiture/withUser',
    findAllVehicule = '/voiture/findAll',
    findLastAssuranceByVoiture = '/voiture/findLastAssuranceByVoiture',
    findAllVehiculeByMarque = '/voiture/findVoitureByMarque',
    findAllAssuranceByVehicule = '/assurance/findAll/voiture',
    findAllRevision = '/parametrage/findAll',
    updateRevision = '/parametrage/update/voiture',
    fiveMinutes = 5,
    tenMinutes  = 10,
    fifteenMinues = 15,
    findAllFichesMaintenance= '/ficheTechnique/searchficheTechnique',
    saveOrUpdateFicheTechnique = '/ficheTechnique/saveOrUpdate/withVoiture',
    findAllReservation = '/reservation/allReservationByMonthAndYears',
    saveReservationUrl = '/reservation/saveOrUpdate',
    annulerReservation = '/reservation/annuler',
    findOneReservation = '/reservation/findOneReservation',
    saveOrUpdateLocationUrl = '/location/saveOrUpdate',
    findAllDettesByUser = '/dette/findAll/user',
    saveOrUpdateProfile = '/profile/saveOrUpdate',

     /**
     * Constant
     */
    STATUT_PAYE = 'Payé',
    STATUT_NON_PAYE = 'Non Payé',
    STATUT_PARTIELLEMENT_PAYE = 'Partiellement Payé',
}