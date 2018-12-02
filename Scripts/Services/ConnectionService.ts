import {IConnectionService} from '../Interfaces/IConnectionService'

class ConnectionService implements IConnectionService {
    getConnectionString():string {
        return "No connection string";
    }
}