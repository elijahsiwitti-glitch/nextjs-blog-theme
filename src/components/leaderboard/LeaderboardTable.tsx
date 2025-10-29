"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatarUrl?: string;
}

interface LeaderboardTableProps {
  title: string;
  data: LeaderboardEntry[];
  className?: string;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  title,
  data,
  className,
}) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entry) => (
              <TableRow key={entry.rank}>
                <TableCell className="font-medium">{entry.rank}</TableCell>
                <TableCell className="flex items-center gap-2">
                  {entry.avatarUrl && (
                    <img
                      src={entry.avatarUrl}
                      alt={entry.name}
                      className="h-6 w-6 rounded-full"
                    />
                  )}
                  {entry.name}
                </TableCell>
                <TableCell className="text-right">{entry.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeaderboardTable;