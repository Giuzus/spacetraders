import { useMachine } from "@xstate/react";
import { useCallback, useEffect } from "react";
import { BaseActionObject, assign, createMachine } from 'xstate';


interface AgentsContext {
  agents: Agent[],
  activeAgent?: Agent
}
interface SetAgentsEvent {
  type: "SET_AGENTS",
  agents: Agent[]
}
interface SelectAgentEvent {
  type: "SELECT",
  agentName: string
}
interface DeselectAgentEvent {
  type: "DESELECT"
}

const agentsMachine = createMachine<AgentsContext, SetAgentsEvent | SelectAgentEvent | DeselectAgentEvent>({
  /** @xstate-layout N4IgpgJg5mDOIC5QEMYDsAusB0BXNsYANmAMYaQDEAygKIAytAwgCoDaADALqKgAOAe1gBLDMIFpeIAB6IAjAE4AbNgAsAVgDMcgEzqANCACe8hR2wdNS1UvXKdAdkcAOdQF83h1GEw58hEnIqOhYAfQBBAHFaADkWak4eJBBBETEJKVkEVR1DEwRnOWx1DlKOByUdBU0FDU0PL3QsbACyCggaBmZ2bilU0XFJZKzNTWdsJQUtXQNjeU0HYqsbO0qnB2cHBpBvXxbiNqoAEVo6RlZEvqEBjOHTFTqZvPmFJetbe3XXD08QNAEIHApLssFc0oNMogALRKZ4IGHbEF+AgHIIQME3IagLLqIqFPRwuTOHRqaaaHSVaq1LSIpo4VpojHpLEyRCjFRTbQEuYIRSaCzLD5rFzuH5AA */
  id: "agents",
  predictableActionArguments: true,
  context: {
    agents: [],
    activeAgent: undefined
  },
  initial: "unselected",
  states: {
    unselected: {
      on: {
        SELECT: {
          target: "selected",
          actions: "selectAgent"
        },

        SET_AGENTS: {
          actions: 'setAgents'
        }
      }
    },

    selected: {
      on: {
        SELECT: {
          target: "selected",
          internal: true,
          actions: 'selectAgent'
        },

        DESELECT: "unselected"
      }
    }
  },
}, {
  actions: {
    setAgents: assign({
      agents: (_, event: SetAgentsEvent) => {
        return event.agents
      }
    }),
    selectAgent: assign({
      activeAgent: ({ agents }, event: SelectAgentEvent) => {
        return agents.find(a => a.name == event.agentName)
      }
    }),
  }
})


export const useAgents = (initialAgents: Agent[]) => {

  const [state, send] = useMachine(agentsMachine);

  useEffect(() => {
    send({ type: "SET_AGENTS", agents: initialAgents });
  }, [send, initialAgents]);

  const selectAgent = useCallback((name: string) => {
    send({ type: "SELECT", agentName: name })
  }, [send])

  return {
    agentSelected: state.matches("selected"),
    agents: state.context.agents,
    activeAgent: state.context.activeAgent,
    selectAgent
  };
}