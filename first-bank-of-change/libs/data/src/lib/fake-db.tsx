import { useContext, createContext, useState } from "react";
import { v4 as uuid } from 'uuid';
import { ApplicationData } from "./application-data";

export const dbContext = createContext(null);

export function useDB() {
  return useContext(dbContext);
}

// Emulates a simple DB for app data and provided via a hook.
export function useProviderDB() {
  const [applications, setApplciations] = useState<ApplicationData[]>([]);

  const addUpdateApplciation = (app: ApplicationData) => {
    if (!app || app.id) { // do not add empty app or an alreay saved one.
      return;
    }
    app.id = uuid();
    applications.push(app);
    setApplciations(applications);
  }

  const deleteApplication = (deleteApp: ApplicationData) => {
    const newAppData = applications.filter((app) => {
      return deleteApp && deleteApp.id && app.id === deleteApp.id;
    })
    setApplciations(newAppData);
  }

  return {
    applications,
    addUpdateApplciation,
    deleteApplication,
  }
}
