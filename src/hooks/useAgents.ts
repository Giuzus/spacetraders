import { useMachine } from "@xstate/react";
import { useCallback, useEffect } from "react";
import { assign, createMachine } from "xstate";

interface AgentsContext {
  agents: Agent[];
  activeAgent?: Agent;
}
interface SetAgentsEvent {
  type: "SET_AGENTS";
  agents: Agent[];
}
interface ActivateAgentEvent {
  type: "ACTIVATE_AGENT";
  agentName: string;
}
interface DeactivateAgentEvent {
  type: "DEACTIVATE_AGENT";
}

const agentsMachine = createMachine<
  AgentsContext,
  SetAgentsEvent | ActivateAgentEvent | DeactivateAgentEvent
>(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QEMYDsAusDEBlAogCoD6AggOL4ByhuA2gAwC6ioADgPawCWG3HaViAAeiAIwBmAHQB2ACwA2GTLGSArHICcEgBxrNAGhABPcQzVSdCzTKULVEucrUBfF0dRhMsKVQ6kAYz4ANzBSdAxsUgBhQgBJADVSQnwyShpGFiQQTh4+ASFRBAkZHSkJACZ9BTU1CTEZCQY5I1MEMU0KqQU5BrV5BrkNWzcPCJ9AkLCI7AARfBj4pJS06kJMoVzefkFsorkGaWbrcxk1VTOK1sQ5OSktTUebMTlHCUcFUZBPbylJ7lC4S8kUWiWSqQoaw22S2+V2oCKMgqMnuOluYgYNkqYgU1wQt3uTx0Eh6t0e+jc7hAaA4EDgQh+WE2XG2BT2iAAtI4pFVKhUdFYhgx7C0TJzXlIGFKpcixMika4qYyfH5-oCIsy8jtCuJNGUhvV3mdMQwxGo8XKytVKioFMTDuYvsq-kEAdNgZrWfCRIgFCVZDpNHLmkjJApcWL2uGpA1NOHehVzE4xJSXEA */
    id: "agents",

    predictableActionArguments: true,

    context: {
      agents: [],
      activeAgent: undefined,
    },

    initial: "NoActiveAgent",

    states: {
      NoActiveAgent: {
        on: {
          ACTIVATE_AGENT: {
            target: "ActiveAgent",
            actions: "setActiveAgent",
          },
        },
      },

      ActiveAgent: {
        on: {
          DEACTIVATE_AGENT: {
            target: "NoActiveAgent",
            actions: "removeActiveAgent",
          },

          ACTIVATE_AGENT: {
            target: "ActiveAgent",
            internal: true,
            actions: "setActiveAgent",
          },
        },
      },
    },

    on: {
      SET_AGENTS: {
        target: ".NoActiveAgent",
        actions: "setAgents",
      },
    },
  },
  {
    actions: {
      setAgents: assign({
        agents: (_, event: SetAgentsEvent) => {
          return event.agents;
        },
      }),
      setActiveAgent: assign({
        activeAgent: ({ agents }, event: ActivateAgentEvent) => {
          return agents.find((a) => a.name == event.agentName);
        },
      }),
      removeActiveAgent: assign({
        activeAgent: () => {
          return undefined;
        },
      }),
    },
  }
);

export const useAgents = (initialAgents: Agent[]) => {
  const [state, send] = useMachine(agentsMachine);

  useEffect(() => {
    send({ type: "SET_AGENTS", agents: initialAgents });
  }, [send, initialAgents]);

  const activateAgent = useCallback(
    (name: string) => {
      send({ type: "ACTIVATE_AGENT", agentName: name });
    },
    [send]
  );

  const deactivateAgent = useCallback(() => {
    send({ type: "DEACTIVATE_AGENT" });
  }, [send]);

  return {
    isAgentActive: state.matches("ActiveAgent"),
    agents: state.context.agents,
    activeAgent: state.context.activeAgent,
    activateAgent,
    deactivateAgent,
  };
};
